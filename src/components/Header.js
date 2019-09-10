// 无状态的组件（函数式的组件）
// 什么时候使用无状态组件：1.无需state，即不处理用户的输入，组件的所有数据都依赖props传入的
// 好处：不需要声明累，可以避免大量的比如extends（继承）或者constructor这样的代码！不需要显示声明this关键字，在es6的类声明中往往需要将函数的this关键字绑定到当前作用域，而因为函数式声明的特性，我们不需要再强制绑定
// import React,{ Component } from 'react';
import React from 'react';

// class Header extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-1 col-xs-offset-11">
//             <h1>Header !!!!</h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// 需要状态处理时再引入高阶组件（hoc)，会返回组件的函数
// 重构
const Header = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <h1>{props.homeLink}</h1>
        </div>
      </div>
    </div>
  );
}
export default Header;
