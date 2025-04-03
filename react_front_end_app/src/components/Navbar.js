import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">VeritasOne</Link>
      </div>
      <div className="navbar-links">
        <Link to="/About">About Us</Link>
        <Link to="/Signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;