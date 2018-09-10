import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Intro />
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
