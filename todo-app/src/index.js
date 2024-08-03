import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Waves from './components/Waves'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Waves />
  </React.StrictMode>
)