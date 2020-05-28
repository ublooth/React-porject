import React, { Component } from 'react'
import './index.scss'
import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'
import store from '../../store/index'


import home_n from '../../assete/home-n.png'
import home_y from '../../assete/home-y.png'
import me_n from '../../assete/me-n.png'
import me_y from '../../assete/me-y.png'
import hm_n from '../../assete/hm-n.png'
import hm_y from '../../assete/hm-y.png'

class menuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

  }
  render() {
    let storeData = store.getState()
    return (
      <div className="menuBar-box">
        <ul>
          <li>
            <Link to={ '/index/' + storeData.geohash }>
              <div className="img">
                {
                  this.props.url === "/index" ? <img src={home_y} alt=""></img> : <img src={home_n} alt=""></img>
                }
              </div>
              <p>外卖</p>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <div className="img">
                {
                  this.props.url === "/search" ? <Icon type="search" size={'xs'} color="#1c6cdc" /> : <Icon type="search" size={'xs'} color="#666" />
                }
              </div>
              <p>搜索</p>
            </Link>
          </li>
          <li>
            <Link to="/order">
              <div className="img">
                {
                  this.props.url === "/order" ? <img src={hm_y} alt=""></img> : <img src={hm_n} alt=""></img>
                }
              </div>
              <p>订单</p>
            </Link>
          </li>
          <li>
            <Link to="/me">
              <div className="img">
                {
                  this.props.url === "/me" ? <img src={me_y} alt=""></img> : <img src={me_n} alt=""></img>
                }
              </div>
              <p>我的</p>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default menuBar