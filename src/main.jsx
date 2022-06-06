import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import StoreProvider from './context/StoreProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>
)
