import React, { Component } from 'react';
import { getPopCityList } from './api/api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.getSliderList();
  }
  getSliderList() {
    getPopCityList().then(res => {
      console.log('请求返回的数据');
      console.log('getCityList', res)
    })
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
