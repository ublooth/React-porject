import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import './index.scss'
//引入此路径，才不会打包失败
import Swiper from 'swiper/js/swiper.js';
//引入样式，还可以加上自己的样式
import 'swiper/css/swiper.min.css';

import { getBannerList } from '../../api/api'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      bannerData: [],
    }
  }
  componentDidMount() {
    console.log('获取路由', this.props.location)  // 获取URL参数
    this.getBannerListData()
  }
  componentWillUnmount() {
    
   }
  componentDidUpdate(){
   
  }
  getBannerListData() {
    getBannerList(this.props.location.query.geohash).then(res => {
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
    const { bannerData, imgBaseUrl } = this.state
    console.log('bannerData', this.state.bannerData)
    return (
      <div className="index-box">
        <div className="head-head">
          <span className="span-icon">
            <Icon type="search" size={'md'} color="#fff"/>
          </span>
          <span className="span-name">厦门市湖里区宜兰路17号</span>
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
      </div>
    )
  }
}
export default Index;