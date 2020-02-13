import React, { Component } from 'react'
import { getPopCityList } from '../../api/api.js';

import Head from '../components/Head/head'
class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    }
  }
  componentDidMount() {
    this.getSliderList();
  }
  getSliderList() {
    getPopCityList().then(res => {
      console.log('请求返回的数据');
      console.log('getCityList', res)
    })
    this.setState({
      url : this.props.match.path
    })
    
    console.log('state.url', this.state.url) 
  }
  render() {
    return(
      <div>
        <Head></Head>
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