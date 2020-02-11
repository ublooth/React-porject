import React, { Component } from 'react'
import { getPopCityList } from '../../api/api.js';

class City extends Component {
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
    return(
      <div>
        2222
        <button onClick={ this.toGoBack.bind(this) }>返回</button>
      </div>
    );
  }
  toGoBack() {
    this.props.history.goBack();
  }
}

export default City;