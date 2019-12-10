import React, { Component } from 'react';
import PropTypes from 'prop-types';// 使用 PropTypes 进行类型检查

export default class Home extends Component {
  constructor(props) {
    super(props); // 在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。
    this.state = {  // 用this.state初始化age,在render里输出
      age: props.age,
      status: 0,
      status2: '',
      homeLink: "Change Link",
      list: [],
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 2000);
    console.log("在 React 组件挂载之前，会调用它的构造函数constructor()>挂载no1")
  }

  onMakeOlder() {
    this.setState({  // this.setState()的返回值是一个新的对象,也就是说是一个新的状态.它使用了Object.assign(),将已修改的属性添加进去.而不是覆盖.
      age: this.state.age + 3
    });
  }

  handleGreet() { // 父组件传递过来的函数
    this.props.greet(this.state.age)
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
  
  getVal(e) {
    // console.log(this.input.value)  // DOM元素
    let val = e.target.value;
    // this.setState({  // 修改数据方法1
    //   status: val
    // });
    this.setState(() => { // 修改数据方法2
      return {
        status2: val
      }
    });
  }

  addList() {
    this.setState(() => {
      return {
        list: this.state.list.concat(this.state.status2),
        // status2: '',
      }
    });
    this.props.changeAppText(this.state.status2);
  }

  // getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
  static getDerivedStateFromProps(nextProps, prevState) {
    const { type } = nextProps;
    // 当传入的type发生变化的时候，更新state
    if (type !== prevState.type) {
      return {
        type,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。")
  }

  // 返回一个布尔值。在组件接收到新的props或者state时被调用。 true更新DOM，false不更新
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('Component should update', nextProps, nextState);
    if (nextState.status === 1) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('在组件完成更新后立即调用。在初始化时不会被调用。', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('当组件从 DOM 中移除时会调用');
  }


  // 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。
  render() {
    // console.log("props", this.props) // 输出传递过来的数据
    return (
      <div>
        <h1>Home !!</h1> 
        { false ? 'hello' : 'world' }
        <div>you name is { this.props.name }, you age is { this.state.age }</div>
        <div>Status: { this.state.status }</div>
        <div>
        {/* <button onClick={ this.onMakeOlder.bind(this) } className="btn btn-primary">age +</button> */}
        <button onClick={ () => { this.onMakeOlder() } } className="btn btn-primary">age +</button>
        {/* .bind(this) 指向this,或者用es6箭头函数 */}
        <hr/>
        <button onClick={ this.handleGreet.bind(this) } className="btn btn-primary">alert</button>
        {/* 向父组件传递数据 */}
        <hr/>
        <button onClick={ this.onChangeLink.bind(this) } className="btn btn-primary">Change Header Link</button>

          <ul>
            { this.props.user.hobbies.map((hobby, i) => <li key={i}>{ hobby }</li>) }
          </ul>

        </div>
        <div>{ this.props.children }</div>
        <input
          type="text"
          ref={ (input) => { this.input = input } }
          onChange={ this.getVal.bind(this) }
          value={ this.state.status2 }
        />
        <button onClick={ this.addList.bind(this) }>确定</button>
        <div>
          {this.state.list.map((item, i) => <p key={i}>{ item }</p>)}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // PropTypes 提供验证器，可用于确保组件接收到的数据类型是有效的。
  name: PropTypes.string,
  age: PropTypes.number, // age是number类型
  user: PropTypes.object,
  children: PropTypes.element.isRequired, // 必须只有一个元素，否则控制台会打印警告。
  greet: PropTypes.func,
};