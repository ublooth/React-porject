import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import './index.scss'
//引入此路径，才不会打包失败
import Swiper from 'swiper/js/swiper.js';
//引入样式，还可以加上自己的样式
import 'swiper/css/swiper.min.css';
// import image from '../../assete/1111.jpeg'

import { getBannerList, cityGuess, msiteAddress, shopList } from '../../api/api'
import store from '../../store/index'
import {setGeohash, setLatlon} from '../../store/actionCreator'
import RatingStar from '../../components/ratingStar/index.js'

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
      shopListDataArr: []
    }
  }
  componentDidMount() { // 在第一次渲染后调用
    // console.log('获取路由', this.props.location)  // 获取URL参数
    //31.23338,121.50126
    if(!this.props.location.query) {
      cityGuess({type: 'guess'}).then(res => {
        console.log(res, '-------')

      })
      this.getBannerListData(31.23338,121.50126)
    } else {
      let action = setGeohash(this.props.location.query.geohash);
      store.dispatch(action); //分发 action
      this.getBannerListData(this.props.location.query.geohash)
      msiteAddress(this.props.location.query.geohash).then(res => {
        let str = setLatlon({lat: res.data.latitude, lon: res.data.longitude})
        store.dispatch(str)
        this.setState({
          title: res.data.name
        })
        this.getStoreData()
      })
    }
  }
  
  getStoreData() {
    let obj = store.getState()
    shopList(obj.latitude, obj.longitude, this.state.offset, this.state.restaurantCategoryId).then(res => {
      // console.log('-----', res)
      this.setState({
        shopListDataArr: res.data
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
  render() {
    const { bannerData, imgBaseUrl, title, shopListDataArr, imgBaseUrl2 } = this.state
    return (
      <div className="index-box">
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
            {shopListDataArr.length && shopListDataArr.map((item, i) => (
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
                      <span className="yue">月售101单</span>
                    </div>
                    <div className="sales-div">
                      <span>蜂鸟专送</span>
                      <span>准时达</span>
                    </div>
                  </div>
                  <div className="time">
                    <span className="give">
                      <p>￥20起送<span>/</span>配送费约￥5</p>
                    </span>
                    <span className="kilometre">
                      <span>288.4公里</span>
                      <span> / </span>
                      <span>3小时21分钟</span>
                    </span>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Index;