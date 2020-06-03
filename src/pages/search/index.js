import React, { Component } from 'react'
import MenuBar from '../../components/menuBar'
import './index.scss'
import { Toast } from 'antd-mobile'
import { searchRestaurant } from '../../api/api'
import { setStore, getStore, removeStore } from '../../utils/commons'

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      geohash: '',
      searchBool: false, // 判断是否搜索过数据
      shopList: [],
      imgBaseUrl: '/img/',
      searchHistory: [], // 搜索历史
    }
  }
  componentDidMount() {
    // console.log('获取路由', this.props.match)  // 获取URL参数
    this.setState({
      geohash: this.props.match.params.geohash
    })
    let str = JSON.parse(getStore('search'));
    if(str) {
      this.setState({
        searchHistory: [...this.state.searchHistory, ...str]
      })
    }
  }
  toGoBack() {
    this.props.history.go(-1); // 返回上一级路由
  }
  searchClick() {
    if (!this.state.searchData) {
      Toast.info('搜索词为空', 2);
      return;
    }
    // 搜索数据
    searchRestaurant(this.state.geohash, this.state.searchData).then(res => {
      this.setState({
        shopList: res.data,
        searchBool: true
      }, () => {
        if(this.state.searchHistory.length) {
          let str = false;
          for(let i = 0; i < this.state.searchHistory.length; i++) {
            if(this.state.searchHistory[i] === this.state.searchData) {
              str = true;
              break;
            }
          }
          if(!str) {
            this.setState({
              searchhistory: this.state.searchHistory.push(this.state.searchData)
            }, () => {
              this.setLocalStorage()
            })
          }
        } else {
          this.setState({
            searchhistory: this.state.searchHistory.push(this.state.searchData)
          }, () => {
            this.setLocalStorage()
          })
        }
      })
    })
  }
  setLocalStorage() { // 存储localStoage搜索历史数据
    setStore('search', this.state.searchHistory)
  }
  change(e) {
    this.setState({
      searchData: e.target.value
    })
  }
  eliminate = () => {
    if(this.state.shopList.length) {
      this.setState({
        shopList: [],
        searchBool: false
      })
    }
    this.setState({
      searchData: '',
      searchBool: false
    }, () => {
      // 删除输入框文字
      this.myInput.focus()
      // this.myInput.value=''
    })
  }
  clearSearchHistory() { // 清空所有历史
    removeStore('search');
    this.setState({
      searchhistory: this.state.searchHistory.splice(0, this.state.searchHistory.length), // 清空数组
    })
  }
  removeHistory(i, e) {
    e.stopPropagation(); // 阻止事件冒泡
    let arr = this.state.searchHistory;
    this.state.searchHistory.splice(i, 1)
    this.setState({
      searchhistory: arr
    }, () => {
      this.setLocalStorage();
    })
  }
  historyData(item) {
    this.setState({
      searchData: item,
    }, () => {
      this.searchClick()
    })
  }
  render() {
    const { searchData, shopList, imgBaseUrl, searchBool, searchHistory } = this.state
    return (
      <div className="search-box">
        <div className="head-head">
          <span className="more" onClick={this.toGoBack.bind(this)}></span>
          <span className="name">搜索</span>
        </div>
        <div className="search-click-box">
          <input
            type="text"
            onChange={this.change.bind(this)}
            value={searchData}
            ref={myInput => this.myInput = myInput}
            placeholder="请输入商家或美食名称" />
          <input type="button" value="提交" onClick={this.searchClick.bind(this)} />
          {searchData && <span className="g-right input-g-right" onClick={this.eliminate}></span>}
        </div>

        <div className='search-list'>
          {shopList.length ? <h4>商家</h4> : ''}
          <ul className="search-list-ul">
            {shopList.length ? shopList.map(item => (
              <li key={item.id}>
              <div className="li-div">
                <img src={imgBaseUrl + item.image_path} alt=""/>
              </div>
              <div className="li-div">
                <p>
                  <span>{item.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="14" className="pay_icon">
                    <polygon points="0,14 4,0 24,0 20,14" style={{fill:'none',stroke:'#FF6000',strokeWidth:1}}/>
                    <line x1="1.5" y1="12" x2="20" y2="12" style={{stroke:'#FF6000',strokeWidth:1.5}}/>
                    <text x="3.5" y="9" style={{fill:'#FF6000',fontSize:9,fontWeight:'bold'}}>支付</text>
                  </svg>
                </p>
                <p>月售{item.recent_order_num}单</p>
                <p>{item.float_minimum_order_amount} 元起送 / 距离{
                  Number(item.distance) ? item.distance > 1000? (item.distance/1000).toFixed(2) + '公里': item.distance + 'm'
                  : item.distance}</p>
              </div>
            </li>
            )) : searchBool && <p style={{textAlign: 'center'}}>搜索不到数据</p>}
          </ul>
        </div>

        {
          searchHistory.length && !shopList.length && !searchBool ? <div className="search-history">
            <h4>搜索历史</h4>
            <ul className="search-history-ul">
              {searchHistory.map((item, i) => (
                <li key={i} onClick={this.historyData.bind(this, item)}>
                  <span className="history">{item}</span>
                  <span className="history-g-right" onClick={this.removeHistory.bind(this, i)}>
                    <span className="g-right"></span>
                  </span>
                </li>
              ))}
              <li className="clearSearch" onClick={this.clearSearchHistory.bind(this)}>清空搜索历史</li>
            </ul>
          </div> : ''
        }

        <MenuBar
          url={this.props.match.path}
        ></MenuBar>
      </div>
    )
  }
}
export default search