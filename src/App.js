import React, { Component, Fragment } from 'react';
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ParticlesBackground from './Components/ParticlesBackground'


class App extends Component {
  render() {
    return (
      <Fragment>
        <ParticlesBackground />


        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <Nav />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <Hero />
            </div>
          </div>
          <div className="row">
            <div className="col-12 about-bg">
              <About id="about" />
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default App;
