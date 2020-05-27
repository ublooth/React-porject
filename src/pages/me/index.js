import React, { Component } from 'react'
import MenuBar from '../../components/menuBar'

class me extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>me
        <MenuBar
          url={ this.props.match.path }
        ></MenuBar>
      </div>
    )
  }
}
export default me