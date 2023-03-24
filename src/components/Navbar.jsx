import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav>
      <Link to='main' className='logo'>
        <img src={logo} alt='logo' />
      </Link>

      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label htmlFor="menu-btn" className='menu-icon'>
        <span className='nav-icon'></span>
      </label>

      <ul className='menu'>
        <li><Link to='main' spy={true} smooth={true} offset={-70} duration={500} className="active">About Me</Link></li>
        <li><Link to='skill' spy={true} smooth={true} offset={-70} duration={500}>Skill</Link></li>
        <li><Link to='services' spy={true} smooth={true} offset={-70} duration={500}>Services</Link></li>
        <li><Link to='contact' spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
        <li><Link to='#' className='app'>App</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
