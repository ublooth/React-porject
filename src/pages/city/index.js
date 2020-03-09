import React, { Component } from 'react'
import { currentcity, searchplace } from '../../api/api'
import { setStore, getStore } from '../../utils/commons'
import './index.scss'
import { Toast } from 'antd-mobile';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNnme: '',
      cityId: '',
      searchData: '',
      searchArr: [],
      searchBool: false,
      storeData: null,
    }
  }
  componentDidMount() {
    this.getSliderList();
    this.setState({ // 搜索历史记录
      storeData: JSON.parse(getStore('cityStore'))
    })
  }
  getSliderList() {
    // 获取当前所在城市
    currentcity(this.props.match.params.id, {}).then(res => {
      if(res.status === 200) {
        this.setState({
          cityNnme: res.data.name,
          cityId: res.data.id
        })
      }
    })
  }
  toGoBack() { // 返回上一页
    this.props.history.goBack();
  }
  searchClick() { // 搜索
    if(!this.state.searchData) {
      Toast.info('搜索词为空', 2);
      return;
    }
    searchplace({
      type: 'search',
      city_id: this.state.cityId,
      keyword: this.state.searchData
    }).then(res => {
      console.log("res", res)
      if(res.status === 200) {
        this.setState({
          searchArr: res.data,
          searchBool: true
        })
      }
    })
  }
  change(e) {
    this.setState({
      searchData: e.target.value
    })
  }
  clickCity(item) {
    console.log('item', item)
    setStore('cityStore', [item])
  }
  render() {
    const {searchArr, searchBool, storeData} = this.state;
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
            {
              searchArr.map((item, i) => (
                <li key={ i } onClick={ this.clickCity.bind(this, item) }>
                  <p>{ item.name }</p>
                  <p>{ item.address }</p>
                </li>
              ))
            }
            {/* {
              storeData.map((str, n) => (
                <li key={ n } onClick={ this.clickCity.bind(this, str) }>
                  <p>{ str.name }</p>
                  <p>{ str.address }</p>
                </li>
              ))
            } */}
            {
              !searchArr.length && searchBool && <li className="sorry">很抱歉！无搜索结果</li>
            }
          </ul>
        </div>
        <div className="emptyingAll">清空所有</div>
      </div>
    );
  }
}

export default City;