import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import App from './App'
import config from './aws-exports'
import './assets/css/index.css'

Amplify.configure(config)

ReactDOM.render(<App />, document.getElementById('root'))
