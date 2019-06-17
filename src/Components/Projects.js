import React, { Component, Fragment } from 'react';
import { Dot } from 'react-animated-dots';
import IronBudgetLogo from './images/ironbudget.png'
import IronLiftLogo from './images/ironlift.png'
import CrossyLogo from './images/crossy.png'

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <section id="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5 mb-4">
                                <h1 className="text-center text-white"><span className="tech-text">my</span><span className="stack-text">Work</span></h1>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-lg mb-3">
                                        <figure>
                                            <img src={IronBudgetLogo} atl="Iron-Budget-Logo" className="portfolio-img" />
                                            <figcaption>
                                                <a href="https://github.com/CodeByCK/Iron-Budget-Server" className="btn btn-project mb-3">View Code <i class="fab fa-github"></i></a><br></br>
                                                <a href="http://iron-budget.herokuapp.com" className="btn btn-launch mb-3">Launch</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-lg mb-3">
                                        <figure>
                                            <img src={IronLiftLogo} atl="Iron-Lift-Logo" className="portfolio-img" />
                                            <figcaption>
                                                <a href="https://github.com/CodeByCK/Workout-Log" className="btn btn-project mb-3">View Code <i class="fab fa-github"></i></a><br></br>
                                                <a href="http://simpleworkoutlog.herokuapp.com" className="btn btn-launch mb-3">Launch</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-lg mb-3">
                                        <figure>
                                            <img src={CrossyLogo} atl="Iron-Budget-Logo" className="portfolio-img" />
                                            <figcaption>
                                                <a href="https://github.com/CodeByCK/IronHack-Game" className="btn btn-project mb-3">View Code <i class="fab fa-github"></i></a><br></br>
                                                <a href="https://codebyck.github.io/IronHack-Game/" className="btn btn-launch mb-3">Launch</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-12">
                                        <span className="text-white text-center">More projects in the making <Dot>.</Dot> <Dot>.</Dot> <Dot>.</Dot></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Projects;
