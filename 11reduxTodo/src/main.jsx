import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'// GIVEN BY REACT DEFAULT 
import {store} from './app/store.js' // MADE BY US FOR OUR USAGE

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
