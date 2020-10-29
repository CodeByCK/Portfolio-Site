import React, { Fragment } from "react"

function Contact() {
  return (
    <Fragment>
      <section className="contact-section" id="contact">
        <div className="container">
          <h1 className="text-center">
            <span className="contact-text">my</span>
            <span className="contact-text">Social</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <div className="text-center">
              <a href="https://github.com/CodeByCK">
                <i className="fab fa-github contact-links" />
              </a>
              <a href="https://www.linkedin.com/in/christiankhawam/">
                <i className="fab fa-linkedin contact-links" />
              </a>
              <a href="mailto: christiankhawam@outlook.com">
                <i className="fas fa-envelope contact-links" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact
