import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import InteractionProvider from '../dist'
import './main.css'
import '../dist/style.css'

const root = document.getElementById('root')

ReactDOM.render(
  <InteractionProvider duration={2000}>
    <App />
  </InteractionProvider>,
  root
)
