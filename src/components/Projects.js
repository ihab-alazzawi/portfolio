import React, { PureComponent } from 'react';
import '../assets/styles/Projects.css';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import devNetwork from '../assets/img/projects/devnetwork.png';
import portfolio from '../assets/img/projects/portfolio.png';
import weather from '../assets/img/projects/weather.png';
import ImageGallery from 'react-image-gallery';

class Projects extends PureComponent {
  render() {
    const dn = (
      <a href="https://dnetwork.herokuapp.com" target="_blank">
        Demo
      </a>
    );
    const dnCode = (
      <a href="https://github.com/Ihab-alazzawi/dev-Network" target="_blank">
        Code
      </a>
    );
    const pt = (
      <a href="https://ihab.io" target="_blank">
        Demo
      </a>
    );
    const ptCode = (
      <a href="https://github.com/Ihab-alazzawi/portfolio" target="_blank">
        Code
      </a>
    );
    const w = (
      <a href="https://weather-by-city.herokuapp.com" target="_blank">
        Demo
      </a>
    );
    const wCode = (
      <a
        href="https://github.com/Ihab-alazzawi/Weather-app-React"
        target="_blank"
      >
        Code
      </a>
    );

    const images = [
      {
        original: devNetwork,
        thumbnail: devNetwork,
        description: [dn, ` - `, dnCode],
        useTranslate3D: false
      },
      {
        original: portfolio,
        thumbnail: portfolio,
        description: [pt, ` - `, ptCode],
        useTranslate3D: false
      },
      {
        original: weather,
        thumbnail: weather,
        description: [w, ` - `, wCode],
        useTranslate3D: false
      }
    ];
    return (
      <div className="projects-main">
        <h1>Projects</h1>
        <p />
        <ImageGallery items={images} useTranslate3D={images.useTranslate3D} />
      </div>
    );
  }
}

export default Projects;
