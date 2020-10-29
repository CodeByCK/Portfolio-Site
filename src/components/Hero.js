import React, { Fragment } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ReactTyped from "react-typed"
import CKsvg from "./CK"

function Hero() {
  return (
    <Fragment>
      <div className="hero-container">
        <div className="hero">
          <div className="text-center svgWrapper">
            <CKsvg />
          </div>
          <h2 className="text-center text-white">
            Hello, My name is{" "}
            <span className="hero-bold">Christian Khawam</span>.
          </h2>
          <h2 className="text-center text-white">
            I'm a&nbsp;
            <ReactTyped
              className="hero-bold"
              loop
              typeSpeed={100}
              backSpeed={75}
              strings={[
                "Developer",
                "Designer",
                "Thinker",
                "Problem Solver",
                "Dog Lover",
              ]}
              smartBackspace
              shuffle={false}
              backDelay={1}
              fadeOut={false}
              fadeOutDelay={500}
              loopCount={0}
              showCursor
              cursorChar="|"
            />
          </h2>
          <div className="text-center mt-3">
            <a href="https://github.com/CodeByCK">
              <i className="fab fa-github githubLogo" />
            </a>
            <a href="https://www.linkedin.com/in/christiankhawam/">
              <i className="fab fa-linkedin linkedinLogo" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <AnchorLink href="#about">
            <i class="fas fa-chevron-down down-Arrow"></i>
          </AnchorLink>
        </div>
      </div>
    </Fragment>
  )
}

export default Hero
