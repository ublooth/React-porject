import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import './index.scss'
//引入此路径，才不会打包失败
import Swiper from 'swiper/js/swiper.js';
//引入样式，还可以加上自己的样式
import 'swiper/css/swiper.min.css';

import { getBannerList, cityGuess, msiteAddress, shopList } from '../../api/api'
import store from '../../store/index'
import {setGeohash, setLatlon} from '../../store/actionCreator'
import RatingStar from '../../components/ratingStar/index.js'
import MenuBar from '../../components/menuBar'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      imgBaseUrl2: '/img/', //图片域名地址
      bannerData: [],
      title: '',
      offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
      restaurantCategoryId: '',
      shopListDataArr: [],
      preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
      touchend: false, //没有更多数据
      topButton: false,
    }
  }
  componentDidMount() { // 在第一次渲染后调用
    // console.log('获取路由', this.props.match)  // 获取URL参数
    if(!this.props.match.params.geohash) {
      cityGuess({type: 'guess'}).then(res => {
        console.log(res, '-------')

      })
      this.getStoreData()
      this.getBannerListData(store.getState().geohash)
    } else {
      let action = setGeohash(this.props.match.params.geohash);
      store.dispatch(action); //分发 action
      this.getBannerListData(this.props.match.params.geohash)
      msiteAddress(this.props.match.params.geohash).then(res => {
        let str = setLatlon({lat: res.data.latitude, lon: res.data.longitude})
        store.dispatch(str)
        this.setState({
          title: res.data.name
        })
        this.getStoreData() // 店铺列表
      })
    }

  }
  UNSAFE_componentWillMount() {
    // let bodyHeight = document.body.scrollHeight; // 浏览器所有内容高度
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight //浏览器可视部分高度
    window.addEventListener('scroll', () => {
      let scroll_Top = document.body.scrollTop || document.documentElement.scrollTop // 浏览器滚动部分高度
      if(scroll_Top + clientHeight === document.body.scrollHeight) {
        // console.log('到底部了！！')
        this.setState({
          offset: this.state.offset + 20
        }, () => {
          this.getStoreData()
        })
      }
      if(scroll_Top > clientHeight) {
        this.setState({
          topButton: true
        })
      } else {
        this.setState({
          topButton: false
        })
      }
    })
  }
 
  getStoreData() { // 店铺列表
    if(this.state.touchend) { //无数据
      return
    }
    if(this.state.preventRepeatReuqest) { //防止重复请求
      return
    }
    this.setState({
      preventRepeatReuqest: true
    }, () => {
      let obj = store.getState()
      shopList(obj.latitude, obj.longitude, this.state.offset, this.state.restaurantCategoryId).then(res => {
        // console.log('-----', res)
        this.setState({
          shopListDataArr: [...this.state.shopListDataArr, ...res.data],
          preventRepeatReuqest: false
        })
        // 获取数据小于20，说明没有更多数据，不需要再次请求数据
        if(res.data.length < 20) {
          this.setState({
            touchend: true, //没有更多数据
          })
        }
      })
    })
  }
  // 此事件接收子对象
  childEvevnt = childDate => {
    this.$RatingStar = childDate;
  };
  // 父组件触发子组件的事件
  triggerEvevt = () => {
    this.$RatingStar.alertEvevnt();
  };

  getBannerListData(data) {
    getBannerList(data).then(res => {
      let banner = [...res.data]
      let bannerArr = []
      for (let i = 0, j = 0; i < res.data.length; i += 8, j++) {
        bannerArr[j] = banner.splice(0, 8)
      }
      this.setState({
        bannerData: bannerArr
      },() => {
        new Swiper('.swiper-container',{
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })
      })
    })
  }
  setScrollTop() { // 返回顶部
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    const { bannerData, imgBaseUrl, title, shopListDataArr, imgBaseUrl2, touchend, topButton } = this.state
    return (
      <div className="index-box" ref={node => this.contentNode = node}>
        <div className="head-head">
          <span className="span-icon">
            <Icon type="search" size={'md'} color="#fff"/>
          </span>
          <span className="span-name">{title}</span>
          <span className="span-signIn">登录|注册</span>
        </div>
        <div className="div-swiper">
          <div className="swiper-container" ref="lun">
            <div className="swiper-wrapper">
              {
                bannerData.map((item, i) => {
                  return (<div className="swiper-slide" key={i}>
                    <ul>
                      {
                        item.map((str, t) => {
                          return (<li key={t}>
                            <div><img src={imgBaseUrl + str.image_url} alt=""></img></div>
                            <p>{str.title}</p>
                          </li>)
                        })
                      }
                    </ul>
                  </div>)
                })
              }
            </div>
            {/* 分页器 */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* 附近商家 */}
        <div className="business">
          <div className="head">
            附近商家
          </div>
          <ul className="business-list">
            {shopListDataArr.length ? shopListDataArr.map((item, i) => (
              <li key={i}>
                <span className="span-img"><img src={imgBaseUrl2 + item.image_path} alt=""></img></span>
                <span className="span-item">
                  <div className="name">
                    <span className="one">品牌</span>
                    <span className="two">{item.name}</span>
                    <span className="icon_name">{item.supports.map((str, z) => (
                      <span key={z}>{str.icon_name}</span>
                    ))}</span>
                  </div>
                  <div className="sales">
                    <div className="sales-div">
                      <RatingStar
                        num = { item.rating }
                        index = { i }
                        childEvevnt={this.childEvevnt}
                      ></RatingStar>
                      <span className="fraction">{item.rating}</span>
                      <span className="yue">月售{item.recent_order_num}单</span>
                    </div>
                    <div className="sales-div">
                      {item.delivery_mode && <span>{item.delivery_mode.text}</span>}
                      {item.supports instanceof Array && item.supports.length && item.supports.map(item => {
                        if (item.icon_name === '准') {
                          return true;
                        } else {
                          return false
                        }
                      }) && <span>准时达</span>}
                    </div>
                  </div>
                  <div className="time">
                    <span className="give">
                    <p>￥{item.float_minimum_order_amount}起送<span>/</span>{item.piecewise_agent_fee.tips}</p>
                    </span>
                    <span className="kilometre">
                      {Number(item.distance) ? <span>
                        {item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}/
                      </span> : <span>
                        <span>{item.distance}</span>
                        <span> / </span>
                        <span>{item.order_lead_time}</span>
                      </span>
                      }
                    </span>
                  </div>
                </span>
              </li>
            )) : <p>暂无数据</p>}
            {touchend && <p>没有更多了！</p>}
          </ul>
        </div>
        <MenuBar
          url={ this.props.match.path }
        ></MenuBar>
        {topButton && <button onClick={this.setScrollTop.bind(this)}>Up</button>}
      </div>
    )
  }
}
export default Index;