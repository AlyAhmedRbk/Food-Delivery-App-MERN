import React, { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PlaceOrder from "./pages/place-order/PlaceOrder";
import Cart from "./pages/cart/Cart";
import Footer from './components/footer/Footer';
import AppDownload from './components/app-download/AppDownload';
import Login from './components/login/Login';

const App = () => {
  const  [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />}/>
      </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  )
}

export default App
