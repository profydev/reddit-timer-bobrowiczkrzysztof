import React from 'react';
import './normalize.css';
import './Navbar.css';
import Logo from './logo.svg';

const Navbar = () => (
  <nav className="fixednav">
    <a href="#logo">
      <img src={Logo} alt="" />
    </a>
    <a href="#search">Search</a>
    <a href="#how-it-works">How it works</a>
    <a href="#about">About</a>
  </nav>
);

export default Navbar;
