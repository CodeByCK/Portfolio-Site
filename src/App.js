import React, { Component, Fragment } from 'react';
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import TechStack from './Components/TechStack'
import ParticlesBackground from './Components/ParticlesBackground'
import Projects from './Components/Projects'

import Contact from './Components/Contact'



class App extends Component {
  render() {
    return (
      <Fragment>
        <ParticlesBackground />
        <div className="body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 topNav">

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

                <About />

              </div>
            </div>
            <div className="row">
              <div className="col-12">

                <TechStack />

              </div>
            </div>
            <div className="row">
              <div className="col-12">

                <Projects />

              </div>
            </div>
            <div className="row">
              <div className="col-12 contact-divider">
              </div>
              <div className="col-12 contact-section">

                <Contact />

              </div>
            </div>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default App;
