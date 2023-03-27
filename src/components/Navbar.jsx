import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav>
      <Link to='main' className='logo' smooth={true} duration={500}>
        <img src={logo} alt='logo' />
      </Link>

      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label htmlFor="menu-btn" className='menu-icon'>
        <span className='nav-icon'></span>
      </label>

      <ul className='menu'>
        <li><Link to='main' className="active" smooth={true} duration={500} >About Me</Link></li>
        <li><Link to='features' smooth={true} duration={500} >Skill</Link></li>
        <li><Link to='services' smooth={true} duration={500} >Services</Link></li>
        <li><Link to='contact' smooth={true} duration={500} >Contact</Link></li>
      </ul>

      <li><Link to='#' className='app'>App</Link></li>
    </nav>
  );
}

export default Navbar;
