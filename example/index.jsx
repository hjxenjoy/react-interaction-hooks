import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import InteractionProvider from '../src'
import './main.css'

const root = document.getElementById('root')

ReactDOM.render(
  <InteractionProvider duration={2000}>
    <App />
  </InteractionProvider>,
  root
)
