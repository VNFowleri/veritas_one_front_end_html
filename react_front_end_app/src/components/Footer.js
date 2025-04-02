import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>VeritasOne</div>
      <div className="footer-links">
        {/*
          You can embed icons via FontAwesome or any icon library
          e.g. <i className="fab fa-facebook-f"></i>
        */}
        <a href="https://x.com/VeritasOne_" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://www.instagram.com/veritasonehealth/" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;