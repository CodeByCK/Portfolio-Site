import React, { Component } from 'react';
import Nav from './Components/Nav'
import ParticlesBackground from './Components/ParticlesBackground'
import Hero from './Components/Hero'


class App extends Component {
  render() {
    return (
      <div className="custom">

        <Nav />
        <div className="container">
          <Hero />
        </div>
      </div>
    );
  }
}

export default App;
