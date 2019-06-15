import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Nav extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="navbar">
                    <Navbar.Brand>
                        <span className="navBrand"> CK </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="mr-3">
                            <AnchorLink href="#about" className="navLink">About</AnchorLink>
                        </Navbar.Text>
                        <Navbar.Text className="mr-3">
                            <span className="navLink">Projects</span>
                        </Navbar.Text>
                        <Navbar.Text className="mr-3">
                            <span className="navLink">Contact</span>
                        </Navbar.Text>
                        <Navbar.Text className="mr-3">
                            <span className="navLink">Resume</span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default Nav;
