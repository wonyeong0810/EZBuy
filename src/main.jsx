import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import TestSend from './pages/TestSend.jsx'
import Cart from './pages/cart.jsx'
import Footer from './pages/Footer.jsx'
import Purchace from './pages/Purchase.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchase" element={<Purchace />} />
        {/*<Route path="/Footer" element={<Foot />} />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
