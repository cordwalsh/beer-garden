import React from 'react';
import { Link } from 'react-router-dom';






function Header(){
  return (
    <div className="header">
      <h1>TAP A KEG</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add a keg</Link>

    </div>
  );
}

export default Header;
