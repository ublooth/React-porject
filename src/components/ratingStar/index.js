import React, { Component } from 'react'
import './index.scss'
// import { Icon } from 'antd-mobile';

class ratingStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5],
      fraction: 0.5
    }
  }
  componentDidMount() { // 在第一次渲染后调用
    console.log('document.querySelectorAll(.jindu)', document.querySelectorAll('.jindu'))
    let str = document.querySelectorAll('.jindu')
    let r = /^[0-9]*[1-9][0-9]*$/　　//正整数
    if(r.test(this.state.fraction)) {
      for (let i = 0; i < this.state.fraction; i++) {
        str[i].style.width = "20px"
      }
    } else {
      let integer = String(this.state.fraction).split('.')
      if(integer[0] > 0) {
        for (let i = 0; i < integer[0]; i++) {
          str[i].style.width = "20px"
        }
        str[integer[0]].style.width = 15 * ('0.' + integer[1]) + 'px'
      } else {
        str[integer[0]].style.width = 15 * ('0.' + integer[1]) + 'px'
      }
    }
  }
  render() {
    const { arr } = this.state
    return (
      <div>
        <div className="xing">
          {arr.map((item, i) => (
            <div key={i} className="xing_body">
              <svg t="1571127072846" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16104" width="100" height="100"><path d="M778.479 1002.496c-12.288 0-24.576-3.071-37.888-10.239L533.742 883.713c-5.12-3.072-12.288-5.12-20.479-5.12-7.168 0-15.36 2.048-20.48 4.096L286.959 992.257c-12.288 7.168-24.576 10.239-38.912 10.239-24.576 0-48.128-11.264-64.513-29.695-16.384-18.433-22.527-43.008-18.432-67.584l39.937-229.376c2.048-14.336-3.072-28.672-13.313-38.912L25.839 476.16C2.287 453.633-5.905 420.864 4.335 390.144c10.239-30.721 35.84-52.225 67.584-57.345l229.376-33.792c14.336-2.048 27.647-11.264 33.791-23.552l102.4-208.896c14.336-28.672 43.008-46.08 74.752-46.08s60.416 17.408 74.752 46.08l102.4 208.896c7.168 13.313 19.456 21.504 33.792 23.552L952.559 332.8c31.744 5.12 57.344 26.624 67.584 56.32 10.24 30.72 2.048 63.488-20.48 86.017L834.799 636.928c-11.265 10.24-15.36 24.576-13.313 38.912l38.912 228.352c4.096 24.576-2.048 49.152-18.432 67.584C826.607 991.232 803.055 1002.496 778.479 1002.496z" p-id="16105" fill="#fff"></path></svg>
              <div className="jindu"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ratingStar;