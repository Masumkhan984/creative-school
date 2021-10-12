import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo1.jpg"
                        width="250"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <input /><button>search</button>
                    <Nav className="me-auto">

                        <NavLink className="link" to="/">Home</NavLink>
                        <NavLink className="link" to="/allSer/allServices">Our Courses</NavLink>
                        <NavLink className="link" to="/about">About Us</NavLink>
                        <NavLink className="link" to="/contacts">Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;