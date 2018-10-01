import React from 'react';
import '../assets/styles/About.css';
import standing from '../assets/img/face/standing.png';
import face from '../assets/img/face/ihab.png';

const About = () => (
  <div className="container">
    <div className="left-half">
      <h1>About me</h1>
      <p className="about-line" />
      <p>
        Hi! I'm Ihab, an enthusiastic and passionate Full-stack software
        developer who enjoys developing innovative solutions to online problems,
        and to design and implement beautiful, accessible, websites with more
        focus on the frontend because I really appreciate a good design with
        great performance and I am seeing it's importance more than ever in
        today's apps, websites, and products.
      </p>
      <p>
        I live in Cedar Park Texas a city very close to Austin, I was born in
        1985 and I graduated from Baghdad University with AS degree in Computer
        Science in 2006 and started my career in web development since then.
      </p>
      <p>
        Outside of my professional career, I workout and listen to music and
        often enjoy it quite loud. I watch action and sci-fi movies and American
        TV shows.
      </p>
      <div className="contact-info">
        <h2>get in touch</h2>
        <p className="about-line" />
        <p>
          I’m always open to new opportunities, freelance work, Email me if
          you'd like to work together.
        </p>
        <a href="mailto:ihab.alazzawi@outlook.com?subject=Hi%20there!">
          ihab.alazzawi@outlook.com
        </a>
      </div>
    </div>
    <picture className="right-half">
      <source media="(max-width: 800px)" srcSet={face} />
      <img src={standing} alt="me standing" />
    </picture>
  </div>
);

export default About;
