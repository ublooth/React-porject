import React, { Component } from 'react'
import { currentcity } from '../../api/api'
import './index.scss'

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNnme: '',
    }
  }
  componentDidMount() {
    this.getSliderList();
  }
  getSliderList() {
    // 获取当前所在城市
    currentcity(this.props.match.params.id, {}).then(res => {
      if(res.status === 200) {
        this.setState({
          cityNnme: res.data.name
        })
      }
    })
  }
  toGoBack() {
    this.props.history.goBack();
  }
  render() {
    return(
      <div className="city">
        <div className="head-head">
          <span className="more" onClick={ this.toGoBack.bind(this) }></span>
          <span className="name">{ this.state.cityNnme }</span>
          <span className="tapi" onClick={ this.toGoBack.bind(this) }>切换城市</span>
        </div>
        <div>
          asas
        </div>
      </div>
    );
  }
}

export default City;