import React, { Fragment } from 'react';
import { ProjectCard } from './common'
import { Dot } from 'react-animated-dots';
import myProjects from "./ProjectsData"


const Projects = () => {
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
                        <ProjectCard
                            projects={myProjects}
                            link1="View Code"
                            link2="Launch" />
                    </div>
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <span className="text-white">More projects in the making <Dot>.</Dot> <Dot>.</Dot> <Dot>.</Dot></span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

}

export default Projects;
