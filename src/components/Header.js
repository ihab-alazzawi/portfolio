import React from 'react';
import '../assets/styles/Header.css';

const Header = () => (
  <header>
    <div>
      <a href="mailto:info@ihab.io?subject=Hi%20there!">
        <i className="fas fa-envelope fa-2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/ihab-alazzawi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin fa-2x" />
      </a>
      <a
        href="https://www.facebook.com/ihab.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook fa-2x" />
      </a>
      <a
        href="https://github.com/ihab-alazzawi/portfolio/raw/gh-pages/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-cloud-download-alt fa-2x">
          <p className="resume">RESUME</p>
        </i>
      </a>
    </div>
  </header>
);

export default Header;
