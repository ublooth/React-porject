import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../style/base.scss'
import './App.scss'
import Head from '../components/Head/head'
import { getPopCityList, getAllCityList } from '../../api/api.js';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = { 
      age: 11,
      url: '1212',
      cityOne: [], // 热门城市
    }
  }
  componentDidMount() {
    this.getSliderList();
  }
  async getSliderList() {
    await getPopCityList({type: 'hot'}).then(res => {
      this.setState({
        cityOne: res.data
      })
    })
    await getAllCityList({type: 'group'}).then(res => {
      console.log("res", res)
    })
  }
  async set() {
    await this.setState({
        url: this.props.match.path
    })
  }
  getId(id) {
    console.log("id", id)
  }
  render() {
    return (
      <div className="App">
        <Head></Head>
        <div className="App-current">
          <div className="app-currentHead">
            <span>当前定位城市：</span>
            <span>定位不准时，请在城市列表中选择</span>
          </div>
          <div className="app-current-choice">
            <span className="more"></span>
          </div>
        </div>
        <div className="app-city-str">
          <div className="strHear">热门城市</div>
          <ul className="strLIist">
            { this.state.cityOne.map(
              (item, i) => <li
                onClick={ () => { this.getId(item.id) } }
                key={ i }
              >{ item.name }</li>
            ) }
          </ul>
        </div>
        <Link to='/city'>123123</Link>
      </div>
    );
  }

}

export default App;
