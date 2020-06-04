import React, { Component } from 'react'
import './index.scss'

class food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      oneBool: false,
      twoBool: false,
      threeBool: false,
    }
  }
  componentDidMount() {
    console.log('获取路由', this.props.match)  // 获取URL参数
    this.setState({
      title: this.props.match.params.title
    })
  }
  toGoBack() {
    this.props.history.go(-1); // 返回上一级路由
  }
  oneLi() {
    this.setState({
      oneBool: !this.state.oneBool
    })
  }
  twoLi() {
    this.setState({
      twoBool: !this.state.twoBool
    })
  }
  threeLi() {
    this.setState({
      threeBool: !this.state.threeBool
    })
  }
  render() {
    const {title, oneBool, twoBool, threeBool} = this.state
    return (
      <div className="food-box">
        <div className="head-head">
          <span className="more" onClick={this.toGoBack.bind(this)}></span>
          <span className="name" style={{fontWeight: 800,}}>{title}</span>
        </div>
        <ul className="food-button">
          <li onClick={this.oneLi.bind(this)}>
            <span>甜品饮品</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" className="sort_icon" id={oneBool ? 'aaa' : 'bbb'}>
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </li>
          <li onClick={this.twoLi.bind(this)}>
            <span>排序</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" className="sort_icon" id={twoBool ? 'aaa' : 'bbb'}>
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </li>
          <li onClick={this.threeLi.bind(this)}>
            <span>筛选</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" className="sort_icon" id={threeBool ? 'aaa' : 'bbb'}>
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </li>
        </ul>
      </div>
    )
  }
}
export default food;