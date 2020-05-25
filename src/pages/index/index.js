import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import './index.scss'
//引入此路径，才不会打包失败
import Swiper from 'swiper/js/swiper.js';
//引入样式，还可以加上自己的样式
import 'swiper/css/swiper.min.css';
import image from '../../assete/1111.jpeg'

import { getBannerList, cityGuess, msiteAddress } from '../../api/api'
import store from '../../store/index'
import {setGeohash} from '../../store/actionCreator'
// import ratingStar from '../components/ratingStar.js'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      bannerData: [],
      title: ''
    }
  }
  componentDidMount() { // 在第一次渲染后调用
    console.log('获取路由', this.props.location)  // 获取URL参数
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
        this.setState({
          title: res.data.name
        })
      })
    }
    
    
  }
  
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
    const { bannerData, imgBaseUrl, title } = this.state
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
            <li>
              <span className="span-img"><img src={image} alt=""></img></span>
              <span className="span-item">
                <div className="name">
                  <span>品牌</span>
                  <span>效果展示</span>
                  <span>保准票</span>
                </div>
                <div className="sales">
                  {/* <ratingStar
                  ></ratingStar> */}
                </div>
                <div className="time"></div>
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Index;