import React, { Fragment } from "react"
import Navbar from "react-bootstrap/Navbar"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Nav() {
  return (
    <Fragment>
      <div className="container">
        <Navbar className="navbar">
          <Navbar.Brand>
            <span className="navBrand"> CK </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="mr-3">
              <AnchorLink href="#about" className="navLink">
                About
              </AnchorLink>
            </Navbar.Text>
            <Navbar.Text className="mr-3">
              <AnchorLink href="#project" className="navLink">
                Project
              </AnchorLink>
            </Navbar.Text>
            <Navbar.Text className="mr-3">
              <AnchorLink href="#contact" className="navLink ">
                Contact
              </AnchorLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
  )
}

export default Nav
