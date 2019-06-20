import React, { Component, Fragment } from 'react';
import { Dot } from 'react-animated-dots';
import myProjects from "./ProjectsData"
import Fade from 'react-reveal/Fade'




class Projects extends Component {
    state = {
        projects: myProjects
    }

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
                            {this.state.projects.map((data, i) => {
                                return (
                                    <Fade>
                                        <div className="col-lg-4 mb-3">
                                            <figure>
                                                <img src={data.img} atl={data.alt} className="portfolio-img" />
                                                <figcaption>
                                                    <a href={data.github} className="btn btn-project mb-3">View Code <i class="fab fa-github"></i></a><br></br>
                                                    <a href={data.live} className="btn btn-launch mb-3">Launch</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </Fade>
                                )
                            })}
                        </div>
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <span className="text-white">More projects in the making <Dot>.</Dot> <Dot>.</Dot> <Dot>.</Dot></span>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Projects;
