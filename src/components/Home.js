// 有状态的组件
import React,{ Component} from 'react';

import PropTypes from 'prop-types';// 使用 PropTypes 进行类型检查

export default class Home extends Component{ // Home是一个对象
  constructor(props) { // 初始化函数(构造方法)，首先执行这个函数,props是参数
    super(props); //必须先调用 super()
    this.state = { // 用this.state初始化age,在render里输出
      age: props.initialAge,
      status: 0,
      homeLink: props.initialName
    }
    setTimeout(() => { // 加载完后3秒执行
      this.setState({
        status: 1
      })
    }, 3000);
    console.log("先执行constructor")
  }

  onMakeOlder() {
    this.setState({ // this.setState()的返回值是一个新的对象,也就是说是一个新的状态.它使用了Object.assign(),将已修改的属性添加进去.而不是覆盖.
      age: this.state.age + 3
    })
  }
  handleGreet() {
    this.props.greet(this.state.age);//this.props.greet父组件的函数
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
      // 执行函数获取input框的值
    })
  }

  UNSAFE_componentWillMount() {
    console.log("在渲染前调用,在客户端也在服务端。")
  }
  componentDidMount() {
    console.log("在第一次渲染后调用，只在客户端")
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    console.log("在组件接收到一个新的 prop (更新后)时被调用",nextProps)
  }
  shouldComponentUpdate(nextProps,nextState){ //nextProps,nextState 传过来的下一个数据
    //。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。
    console.log("返回一个布尔值。在组件接收到新的props或者state时被调用",nextProps,nextState);
    if(nextState.status === 1) {
      return false; //false不更新虚拟DOM
    }
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps,nextState) {
    console.log("在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。",nextProps,nextState)
  }
  componentDidUpdate(prevProps,prevState) { //prevProps,prevState 上一次的值
    console.log("component Did Update上一次的值,在组件完成更新后立即调用。在初始化时不会被调用",prevProps,prevState)
  }

  componentWillUnmount() {
    console.log("在组件从 DOM 中移除之前立刻被调用")
  }
  // 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。
  render() { 
    console.log('render输出')
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <div>your name is {this.props.name},你的年龄为 {this.state.age} 岁</div>
            <p>Status: { this.state.status }</p>
            <button className="btn btn-primary" onClick={() => {this.onMakeOlder()}}>点击按钮增加岁数</button>
            <hr/>
            <button onClick={() => this.handleGreet()} className="btn btn-primary">Greet Home组件的按钮</button>
            <hr/>
            <input
              type="text"
              defaultValue={this.props.initialName} //默认数据 
              value={this.state.initialName} // value值可以改变，state会随着状态的变化而变化
              onChange={(event) => this.onHandleChange(event)}
            />
            <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Home组件的按钮</button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // PropTypes 提供验证器，可用于确保组件接收到的数据类型是有效的。
  name: PropTypes.string,
  age: PropTypes.number, // age是number类型
  greet: PropTypes.func, // 函数类型
  initialName: PropTypes.string,
};