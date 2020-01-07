import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  constructor(){
    super()
    this.state = {
      color: '#fff'
    }
  }
  handleClick = () => {
    this.props.handleColorChange()
  }
  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.color}}
        onClick={this.handleClick}
      ></div>
    )
  }
}

export default Child
