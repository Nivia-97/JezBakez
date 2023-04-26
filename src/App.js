import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { CartProvider } from "./components/ShopCartContext";

function App() {
  return <>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <Footer />
    </CartProvider>
  </>;
}

export default App;
