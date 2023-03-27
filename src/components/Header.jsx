import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar /> 
      <div className='name'>
        <h1>Welcome to <span>Arpa Nihan's</span> World</h1>
        <p className='details'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, sint!</p>
        <div className='header-btns'>
          <a href="#" className='cv-btn'>Hire Me</a>
          <a href="#" className='cv-btn1'>Download CV</a>
        </div>
      </div>

      <div className='arrow'></div>
    </div>
  )
}

export default Header;