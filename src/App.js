import React, { Component, Fragment } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import TechStack from "./components/TechStack"
import ParticlesBackground from "./components/ParticlesBackground"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

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
              <div className="col-12 contact-divider"></div>
              <div className="col-12 contact-section">
                <Contact />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
