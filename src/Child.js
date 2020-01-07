import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

handleChangeColor = () => {
  this.props.handleColorChange(getRandomColor())
}

  render() {
    return (
      <div
        className="child" onClick={this.handleChangeColor}
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
