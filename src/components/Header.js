//  无状态组件：无需state，即不处理用户输入，组件的所有数据都是依赖props传入的
// 不需要用到生命周期函数
// 好处：不需要生命类，可以避免大量的譬如extends（继承）或者constructor这样的代码;不需要显示声明this关键字，在ES6的类声明中往往需要将函数的this关键字绑定到当前作用域，而因为函数声明的特性，我们不需要再强制绑定（避免性能开销）

// 需要状态处理>>高阶组件

import React from 'react';

const Header = (props) => {
  return (
    <h1>{ props.homeLink }</h1>
  );
}

export default Header;