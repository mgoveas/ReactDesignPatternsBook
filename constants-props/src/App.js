import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

import List from './components/list'

class App extends Component {
  render() {
    return (
      <div >
        <div >
          <h2>Welcome to React</h2>
        </div>
        <List />
      </div>
    )
  }
}

export default App
