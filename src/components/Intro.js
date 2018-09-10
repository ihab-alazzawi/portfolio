import React from 'react';
import '../assets/styles/Intro.css';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <div className="row">
        {' '}
        <Link to="/" className="btn-landing">
          Home
        </Link>{' '}
      </div>
      <div>
        {' '}
        <Link to="/projects" className="btn-projects">
          Projects
        </Link>{' '}
      </div>
      <div>
        {' '}
        <Link to="/about" className="btn-about">
          About
        </Link>{' '}
      </div>
      <div>
        {' '}
        <Link to="/contact" className="btn-contact">
          Contact
          <span />
        </Link>{' '}
      </div>
    </div>
  );
};

export default Intro;
