import React, { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {
    const [nav,setNav]=useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }
        else{
            setNav(false)
        }
    }
window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
        <a href='/' className='logo'>
            <img src={logo} alt='' />
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn' />
        <label className='menu-icon' for="menu-btn">
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='/'>AboutUs</a></li>
            <li><a href='#service'>Service</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#teams'>Teams</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;