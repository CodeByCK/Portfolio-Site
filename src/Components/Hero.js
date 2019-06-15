import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import ReactTyped from 'react-typed'


class Hero extends Component {
    render() {
        return (
            <Fragment>

                <div className="hero-container">
                    <div className="hero">
                        <h2 className="text-center text-white">// Hello, My name is <span className="hero-bold">Christian Khawam</span>.</h2>
                        <h2 className="text-center text-white">I'm a&nbsp;
                        <ReactTyped
                                className="hero-bold"
                                loop
                                typeSpeed={100}
                                backSpeed={75}
                                strings={["Web Developer", "Designer", "Thinker", "Problem Solver", "Dog Lover"]}
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

                </div>
            </Fragment >
        );
    }
}

export default Hero;
