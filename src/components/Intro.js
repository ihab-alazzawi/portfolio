import React, { Component } from 'react';
import '../assets/styles/Intro.css';
import { Link } from 'react-router-dom';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: undefined
    };
    this.handleSlideOut = this.handleSlideOut.bind(this);
    this.handleSlideIn = this.handleSlideIn.bind(this);
  }

  handleSlideOut() {
    this.setState({ visible: true });
  }

  handleSlideIn() {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div className="close-btn" onClick={this.handleSlideIn} />
        <div onClick={this.handleSlideOut}>
          <Link
            to="/"
            className={
              visible
                ? 'animated fadeOutUpBig slow intro-logo'
                : 'animated fadeInDown intro-logo'
            }
          >
            <h1 className="logo-text">IA</h1>
          </Link>
          <Link
            to="/"
            className={
              visible
                ? 'animated fadeOutUpBig slow btn-landing'
                : 'animated fadeInDown btn-landing'
            }
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={
              visible
                ? 'animated fadeOutUpBig slow btn-projects'
                : 'animated fadeInDown btn-projects'
            }
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={
              visible
                ? 'animated fadeOutUpBig slow btn-about'
                : 'animated fadeInDown btn-about'
            }
          >
            About
          </Link>
          <Link
            to="/contact"
            className={
              visible
                ? 'animated fadeOutUpBig slow btn-contact'
                : 'animated fadeInDown btn-contact'
            }
          >
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;
