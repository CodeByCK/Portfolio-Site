import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade'


const ProjectCard = ({ projects, link1, link2 }) => {
    return (
        <Fragment>
            {projects.map((data, i) => {
                return (
                    <Fade>
                        <div className="col-lg-4 mb-3">
                            <figure>
                                <img src={data.img} alt={data.alt} className="portfolio-img" />
                                <figcaption>
                                    <a href={data.github} className="btn btn-project mb-3">{link1} <i class="fab fa-github"></i></a><br></br>
                                    <a href={data.live} className="btn btn-launch mb-3">{link2}</a>
                                </figcaption>
                            </figure>
                        </div>
                    </Fade>
                )
            })}
        </Fragment>
    )
}

export { ProjectCard }
