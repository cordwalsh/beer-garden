import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/add_beer.png';
import Home from './assets/home.png';
import About from './About';
import Location from './Location'



function Header(){
  return (
    <div className="header">
      <h1>TAP A KEG</h1>
      <div className="links">
        <Link to="/"><img src={Home} /></Link>
        <Link to="/newkeg"><img src={Logo} /></Link>
      </div>
      <div className="links_info">
        <p><Link to="/about">About</Link></p>
        <p><Link to="/location">Location</Link></p>
      </div>
    </div>
  );
}

export default Header;
