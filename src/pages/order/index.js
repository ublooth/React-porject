import React, { Component } from 'react'
import MenuBar from '../../components/menuBar'

class order extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>order
        <MenuBar
          url={ this.props.match.path }
        ></MenuBar>
      </div>
    )
  }
}
export default order;