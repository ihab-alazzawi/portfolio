import React from 'react';
import '../assets/styles/Header.css';

const Header = () => (
  <header>
    <div>
      <i className="fas fa-envelope fa-2x" />
      <i className="fab fa-linkedin fa-2x" />
      <i className="fab fa-facebook fa-2x" />
      <i className="fas fa-cloud-download-alt fa-2x">
        <p className="resume">RESUME</p>
      </i>
    </div>
  </header>
);

export default Header;
