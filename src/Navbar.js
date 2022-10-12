import React from 'react';
import './index.css';

function Navbar() {
  return (
     <div className="Navbarlg">
    <div className="fixed h-[40px] w-screen flex flex-row justify-center items-center bg-[#323233] opacity-90">
        <ul className="lg:w-[50%] md:w-[90%] flex justify-between text-white text-xs cursor-pointer ">
        <a>Store</a>
        <a>Mac</a>
        <a>iPad</a>
        <a>iPhone</a>
        <a>Watch</a>
        <a>AirPods</a>
        <a>Tv & Home</a>
        <a>Only on Apple</a>
        <a>Accessories</a>
        <a>Support</a>
        <a>Search</a>
        <a>Cart</a>
        </ul>
    </div>
    </div>
   
  )
}

export default Navbar

{/*Backdrop fer floo pa marseui*/}