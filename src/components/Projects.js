import React from 'react';
import '../assets/styles/Projects.css';

const Projects = () => (
  <div className="projects-container">
    <h1>Projects</h1>
    <p />
    <div className="box-container">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center">
            <div className="inner">
              <h3 className="flip-box-header">Dev Network</h3>
              <p className="line" />
              <p className="bold">SOCIAL NETWORK FOR DEVELOPERS</p>
              <p>
                React - Redux - Node - Express - MongoDB - BootStrap - PWA -
                Responsive
              </p>
              <i className="fas fa-arrow-circle-left fa-4x" />
            </div>
          </div>
          <div className="flip-box-back text-center">
            <div className="inner">
              <a
                href="https://dnetwork.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-top hover-top"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Ihab-alazzawi/dev-Network"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-bottom hover-bottom"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center">
            <div className="inner">
              <h3 className="flip-box-header">Creative Portfolio</h3>
              <p className="line" />
              <p className="bold">PERSONAL PORTFOLIO</p>
              <p>React - Pure CSS - PWA - Responsive</p>
              <i className="fas fa-arrow-circle-left fa-4x" />
            </div>
          </div>
          <div className="flip-box-back text-center">
            <div className="inner">
              <a
                href="https://ihab.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-top hover-top"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Ihab-alazzawi/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-bottom hover-bottom"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center filter-">
            <div className="inner">
              <h3 className="flip-box-header">Weather App</h3>
              <p className="line" />
              <p className="bold">WEATHER FINDER</p>
              <p>React - Pure CSS - PWA - Responsive</p>
              <i className="fas fa-arrow-circle-left fa-4x" />
            </div>
          </div>
          <div className="flip-box-back text-center">
            <div className="inner">
              <a
                href="https://weather-by-city.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-top hover-top"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Ihab-alazzawi/Weather-app-React"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-bottom hover-bottom"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
