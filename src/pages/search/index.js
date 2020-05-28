import React, { Component } from 'react'
import MenuBar from '../../components/menuBar'
import './index.scss'
import { Toast } from 'antd-mobile'
import home_n from '../../assete/home-n.png'
import { searchRestaurant } from '../../api/api'

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      geohash: '',
    }
  }
  componentDidMount() {
    // console.log('获取路由', this.props.match)  // 获取URL参数
    this.setState({
      geohash: this.props.match.params.geohash
    })
  }
  toGoBack() {
    this.props.history.go(-1); // 返回上一级路由
  }
  searchClick() {
    if (!this.state.searchData) {
      Toast.info('搜索词为空', 2);
      return;
    }
    console.log('==-==-', this.state.searchData, this.state.geohash)
    searchRestaurant(this.state.geohash, this.state.searchData).then(res => {
      console.log(res.data, '[[[[[[[[][[[][[')
    })
  }
  change(e) {
    this.setState({
      searchData: e.target.value
    })
  }
  eliminate = () => {
    this.setState({
      searchData: ''
    }, () => {
      // 删除输入框文字
      this.myInput.focus()
      // this.myInput.value=''
    })
  }
  render() {
    const { searchData } = this.state
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
          <h4>商家</h4>
          <ul className="search-list-ul">
            <li>
              <div className="li-div">
                <img src={home_n} alt=""/>
              </div>
              <div className="li-div">
                <p>
                  <span>美食店</span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="14" className="pay_icon">
                    <polygon points="0,14 4,0 24,0 20,14" style={{fill:'none',stroke:'#FF6000',strokeWidth:1}}/>
                    <line x1="1.5" y1="12" x2="20" y2="12" style={{stroke:'#FF6000',strokeWidth:1.5}}/>
                    <text x="3.5" y="9" style={{fill:'#FF6000',fontSize:9,fontWeight:'bold'}}>支付</text>
                  </svg>
                </p>
                <p>月售100单</p>
                <p>20 元起送 / 距离1363.9公里</p>
              </div>
            </li>
            <li>
              <div className="li-div">
                <img src={home_n} alt=""/>
              </div>
              <div className="li-div">
                <p>
                  <span>美食店</span>
                  <span>支付</span>
                </p>
                <p>月售100单</p>
                <p>20 元起送 / 距离1363.9公里</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="search-history">
          <h4>搜索历史</h4>
          <ul className="search-history-ul">
            <li>
              <span>1</span>
              <span className="g-right history-g-right"></span>
            </li>
            <li>
              <span>1</span>
              <span className="g-right history-g-right"></span>
            </li>
            <li className="clearSearch">清空搜索历史</li>
          </ul>
        </div>

        <MenuBar
          url={this.props.match.path}
        ></MenuBar>
      </div>
    )
  }
}
export default search