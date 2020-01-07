import React, { Component } from 'react'
import './App.css'
import Parent from './Parent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent parent_value="test parent value"/>
      </div>
    )
  }
}

export default App
