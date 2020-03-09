import React, { Component } from 'react'
import { currentcity } from '../../api/api'
import './index.scss'
import { Toast } from 'antd-mobile';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNnme: '',
      searchData: '',
    }
  }
  componentDidMount() {
    this.getSliderList();
  }
  getSliderList() {
    // 获取当前所在城市
    currentcity(this.props.match.params.id, {}).then(res => {
      if(res.status === 200) {
        this.setState({
          cityNnme: res.data.name
        })
      }
    })
  }
  toGoBack() {
    this.props.history.goBack();
  }
  searchClick() {
    if(!this.state.searchData) {
      Toast.info('This is a toast tips !!!', 1);
    }
  }
  change(e) {
    this.setState({
      searchData: e.target.value
    })
  }
  render() {
    return(
      <div className="city">
        <div className="head-head">
          <span className="more" onClick={ this.toGoBack.bind(this) }></span>
          <span className="name">{ this.state.cityNnme }</span>
          <span className="tapi" onClick={ this.toGoBack.bind(this) }>切换城市</span>
        </div>
        <div className="search">
          <div>
            <input type="text" className="text-input" onChange={ this.change.bind(this) } defaultValue={this.state.searchData} placeholder="输入学校、商务楼、地址"/>
          </div>
          <div>
            <button onClick={ this.searchClick.bind(this) }>提交</button>
          </div>
        </div>
        <p className="search-History">搜索历史</p>
        <div className="search-list">
          <ul>
            <li>
              <p>汉堡店</p>
              <p>一栏陆</p>
            </li>
          </ul>
        </div>
        <div className="emptyingAll">清空所有</div>
      </div>
    );
  }
}

export default City;