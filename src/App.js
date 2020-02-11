// import React from 'react';
import axios from 'axios';

// function App() {
  
//   return (
//     <div className="App">
//       123123
//     </div>
//   );
// }

import React, { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.getSliderList();
  }
  getSliderList(){
    axios({
      method: "GET",
      url: `/v1/cities?type=hot`,
    })
      .then((res) => {
        console.log('请求返回的数据');
        console.log(res.data)//此接口返回数据为jsonp格式，须进一步对数据进行处理
      });
  }
  render() {
    return (
      <div className="App">
        123123
      </div>
    );
  }
}

export default App;
