import React, { Component } from 'react';
import '../style/base.scss'
import './App.scss'
import { getPopCityList, getAllCityList } from '../../api/api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 11,
      url: '1212',
      cityOne: [], // 热门城市
      allCity: {}, // 全部城市
    }
  }
  componentDidMount() {
    this.getSliderList();
    this.set();
  }
  getSliderList() {
    getPopCityList({ type: 'hot' }).then(res => {
      if (res.status === 200) {
        this.setState({
          cityOne: res.data
        })
      }
    })
    getAllCityList({ type: 'group' }).then(res => {
      if (res.status === 200) {
        this.setState({
          allCity: res.data
        });
        this.setAllCity();
      }
    })
  }
  async set() {
    await this.setState({
      url: this.props.match.path
    })
  }
  setAllCity() {
    let arr = {};
    for (let i = 65; i <= 90; i++) {
      if (this.state.allCity[String.fromCharCode(i)]) {
        arr[String.fromCharCode(i)] = this.state.allCity[String.fromCharCode(i)]
      }
    }
    this.setState({
      allCity: arr
    });
  }
  getId(id) {
    this.props.history.push('/city/' + id)
  }
  render() {
    return (
      <div className="App">
        <div className="head-head">
          <div className="head-name">ele.me</div>
          <div className="head-login">登录|注册</div>
        </div>
        <div className="App-current">
          <div className="app-currentHead">
            <span>当前定位城市：{this.state.url}</span>
            <span>定位不准时，请在城市列表中选择</span>
          </div>
          <div className="app-current-choice">
            <span className="more"></span>
          </div>
        </div>
        <div className="app-city-str">
          <div className="strHear">热门城市</div>
          <ul className="strLIist">
            {this.state.cityOne.map(
              (item, i) => <li
                onClick={() => { this.getId(item.id) }}
                key={i}
                className="bule"
              >{item.name}</li>
            )}
          </ul>
        </div>
        {
          Object.keys(this.state.allCity).map(
            (item, i) => <div className="app-city-all" key={i}>
              <div className="allHead">
                <span>{item}</span>
                { i === 0 && <span style={{ display: 'inline-block' }}>（按字母排序）</span> }
              </div>
              <ul className="strLIist">
                {this.state.allCity[item].map((str, z) =>
                  <li
                    key={z}
                    onClick={() => { this.getId(str.id) }}
                  >
                    {str.name}
                  </li>
                )}
              </ul>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
