import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">VeritasOne</Link>
      </div>
      <div className="navbar-links">
        <Link to="/about">About Us</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;