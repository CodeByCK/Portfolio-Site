import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar'


class Nav extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bsPrefix="navbar">
                    <Navbar.Brand>
                        <span className="navBrand"> Christian Khawam </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="mr-3">
                            <span className="navLink">About</span>
                        </Navbar.Text>
                        <Navbar.Text className="mr-3">
                            <span className="navLink">Projects</span>
                        </Navbar.Text>
                        <Navbar.Text className="mr-3">
                            <span className="navLink">Contact</span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default Nav;
