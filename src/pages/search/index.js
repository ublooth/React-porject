import React, { Component } from 'react'
import MenuBar from '../../components/menuBar'

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>search
        <MenuBar
          url={ this.props.match.path }
        ></MenuBar>
      </div>
    )
  }
}
export default search