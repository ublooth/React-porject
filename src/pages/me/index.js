import React, { Component } from 'react'
import MenuBar from '../../components/menuBar'
import './index.scss'
import img_icon from '../../assete/me-y-y.png'
import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'

class me extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  toGoBack() {
    this.props.history.go(-1); // 返回上一级路由
  }
  render() {
    const {} = this.state
    return (
      <div className="me-box">
        <div className="head-head">
          <span className="more" onClick={this.toGoBack.bind(this)}></span>
          <span className="name">我的</span>
        </div>
        <div className="me-info">
          <div className="info">
            <span><img src={img_icon} alt=""></img></span>
            <span>
              <p>登录/注册</p>
              <p>暂无绑定手机号</p>
            </span>
            <span className="more"></span>
          </div>
        </div>
        <ul className="money">
          <li>
            <p>0.00<span>元</span></p>
            <p>我的余额</p>
          </li>
          <li>
            <p>0<span>个</span></p>
            <p>我的优惠</p>
          </li>
          <li>
            <p>0<span>分</span></p>
            <p>我的积分</p>
          </li>
        </ul>

        <ul className="fun">
          <li>
            <Link to="/order">
              <Icon type="check-circle"></Icon>
              <span className="fun-name">我的订单</span>
              <span className="more"></span>
            </Link>
          </li>
          <li>
            <Icon type="check-circle-o"></Icon>
            <span className="fun-name">积分商城</span>
            <span className="more"></span>
          </li>
          <li>
            <Icon type="loading"></Icon>
            <span className="fun-name">饿了么会员卡</span>
            <span className="more"></span>
          </li>
        </ul>

        <ul className="fun">
          <li>
            <Icon type="check-circle"></Icon>
            <span className="fun-name">服务中心</span>
            <span className="more"></span>
          </li>
          <li>
            <Icon type="check-circle-o"></Icon>
            <span className="fun-name">下载饿了么APP</span>
            <span className="more"></span>
          </li>
        </ul>

        <MenuBar
          url={ this.props.match.path }
        ></MenuBar>
      </div>
    )
  }
}
export default me