import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { MantencionApp } from './MantencionApp'
import { store } from './store/store'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <MantencionApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
