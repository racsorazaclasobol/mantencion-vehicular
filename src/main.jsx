import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { MantencionApp } from './MantencionApp'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantencionApp />
    </BrowserRouter>
  </React.StrictMode>
)
