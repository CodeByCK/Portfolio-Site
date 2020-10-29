import React, { Fragment } from "react"
import Fade from "react-reveal/Fade"

function ProjectCard({ projects, link1, link2 }) {
  return (
    <Fragment>
      {projects.map((data, i) => {
        return (
          <Fade>
            <div className="col-lg-4 mb-3">
              <figure>
                <img src={data.img} alt={data.alt} className="portfolio-img" />
                <figcaption>
                  {link1 ? (
                    <a href={data.github} className="btn btn-project mb-3">
                      {link1} <i class="fab fa-github"></i>
                    </a>
                  ) : null}
                  {link2 ? (
                    <a
                      href={data.live}
                      rel="noreferrer"
                      className="btn btn-launch mb-3"
                    >
                      {link2}
                    </a>
                  ) : null}

                  <p>{data.via ? data.via : ""}</p>
                  <p>{data.description ? data.description : ""}</p>
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
