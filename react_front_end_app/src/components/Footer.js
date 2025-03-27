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
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;