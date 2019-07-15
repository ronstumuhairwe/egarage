import React, { Component } from 'react'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Weather ForeCast Today</h1>
        <p> The Weather is Sunny and Will be rainy tomorrow!</p>
        <Header/>
      </div>
    )
  }
}

export default App
