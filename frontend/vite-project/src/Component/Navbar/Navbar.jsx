import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container navbar'>
      <div className="navbar-header">
        <h1>Logo</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="">HOME</a></li>
        <li><a href="">MENU</a></li>
        <li><a href="">MAKE A RESERVATION</a></li>
        <li><a href="">CONTACT US</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
