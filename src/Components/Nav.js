import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Nav = () => {
    return (
        <Fragment>
            <Navbar className="navbar">
                <Navbar.Brand>
                    <span className="navBrand"> ck </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mr-3">
                        <AnchorLink href="#about" className="navLink">About</AnchorLink>
                    </Navbar.Text>
                    <Navbar.Text className="mr-3">
                        <AnchorLink href="#project" className="navLink">Project</AnchorLink>
                    </Navbar.Text>
                    <Navbar.Text className="mr-3">
                        <AnchorLink href="#contact" className="navLink ">Contact</AnchorLink>
                    </Navbar.Text>
                    <Navbar.Text className="mr-3">
                        <a href="https://docs.google.com/document/d/1fRnv_0hY7TbSPWrWmskal4G5gLaatIabX_lh8i5a0xk/edit?usp=sharing" className="btn btn-project">Resume</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </Fragment>
    );
}


export default Nav;
