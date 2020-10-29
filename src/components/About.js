import React, { Fragment } from "react"

function About() {
  return (
    <Fragment>
      <section className="mt-3" id="about">
        <div className="container">
          <div className="text-center mb-5">
            <div className="row">
              <div className="col-12 mt-5 mb-4">
                <h1 className="text-center text-white">
                  <span className="tech-text">about</span>
                  <span className="stack-text">Me</span>
                </h1>
              </div>
            </div>
            <span className="about-text">
              Front-End engineer with knowledge in both client and server-side
              development to create dynamic websites and web applications.
              Currently focusing on client-side development leveraging my
              knowledge in JavaScript ES6+ and modern tools like React.js or
              Angular, providing cutting-edge user interfaces and optimal
              performance across all browsers. Agile and team-oriented with a
              passion for continuous learning, best code practices, and
              problem-solving.
            </span>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About
