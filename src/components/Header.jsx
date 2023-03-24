import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar /> 
      <div className='name'>
        <h1>Welcome to <span>Arpa Nihan's</span> World</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, sint!</p>
      </div>
    </div>
  )
}

export default Header;