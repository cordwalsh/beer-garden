import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/add_beer.png';
import Home from './assets/home.png';
import About from './About';



function Header(){
  return (
    <div className="header">
      <h1>TAP A KEG</h1>
      <div className="links">
        <Link to="/"><img src={Home} /></Link>
        <Link to="/newkeg"><img src={Logo} /></Link>
      </div>
      <div className="links_info">
        <Link to="/about">About</Link>
        <p>Location</p>
        <p>503-555-0104</p>
      </div>
    </div>
  );
}

export default Header;
