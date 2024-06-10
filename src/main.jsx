import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import TestSend from './pages/TestSend.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<TestSend />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
