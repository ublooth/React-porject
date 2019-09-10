import React,{ Component} from 'react';

import PropTypes from 'prop-types';// 使用 PropTypes 进行类型检查

export default class Home extends Component{ // Home是一个对象
  constructor(props) { // 初始化函数(构造方法)，首先执行这个函数,props是参数
    super(props); // 在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。
    // 用this.state.age=17能不能实现重新渲染?不能.因为它只是改变了这个组件当前的状态,并没有调用render().
    this.state = { // 用this.state初始化age,在render里输出
      age: props.initialAge
    }
  }

  onMakeOlder() {
    this.setState({ // this.setState()的返回值是一个新的对象,也就是说是一个新的状态.它使用了Object.assign(),将已修改的属性添加进去.而不是覆盖.
      age: this.state.age + 3
    })
  }
  // 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。
  render() { 
    // let conter = '';
    // if(true) {
    //   conter = 'Hello!!'
    // } // 判断语句
    // console.log(this.props);
    // console.log(this.props.user.hobbies);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home !!!!</h1>
            {/* { conter } */}
            {/*{ false ? 'hello' : 'world' }*/}  {/* 三元运算符 */}
            <div>your name is {this.props.name},你的年龄为 {this.state.age} 岁</div>
            <button className="btn btn-primary" onClick={() => {this.onMakeOlder()}}>点击按钮增加岁数</button>
            <h4>爱好hobbies</h4>
            <ul>
              {/* {this.props.user.hobbies.map((hobby,i) => <li key={ i }>{ hobby }</li>)} */}
              {this.props.user.hobbies.map(function(hobby,i) {
                return <li key={ i }>{ hobby }</li>
              })}
            </ul>
            <div>{ this.props.children }</div>
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
  user: PropTypes.object,
  children: PropTypes.element.isRequired, // 必须只有一个元素，否则控制台会打印警告。
};