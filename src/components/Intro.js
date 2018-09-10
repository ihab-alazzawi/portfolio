import React from 'react';
import '../assets/styles/Intro.css';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-logo">
        <h1 className="logo-text">IA</h1>
      </div>
      <div>
        <Link to="/" className="btn-landing">
          Home
        </Link>
      </div>
      <div>
        <Link to="/projects" className="btn-projects">
          Projects
        </Link>
      </div>
      <div>
        <Link to="/about" className="btn-about">
          About
        </Link>
      </div>
      <div>
        <Link to="/contact" className="btn-contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Intro;
