import React, { useState } from 'react';
import Nav2 from './nav2';
import './index.css'

function Navbar2() {
    const[navbaropen,setnavbarOpen] = useState(false);
  return (
    <div className="Navbarsm z-50">
    <div className="fixed flex flex-col w-screen justify-between items-center text-white bg-black opacity-90">
        <button className="cursor-pointer text-3xl"
        onClick={() => setnavbarOpen(!navbaropen)}>{navbaropen ? "x" : "="}      
        </button>
        {navbaropen && <Nav2/>}
    </div>
    </div>
  )
}

export default Navbar2