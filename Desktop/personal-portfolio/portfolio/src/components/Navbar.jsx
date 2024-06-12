// src/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    return (
        <Navbar
            bg="white"
            expand="lg"
            fixed="top"
            className="shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <Container>
                <Navbar.Brand href="index.html" className="d-block d-lg-none">
                    <h5 className="text-primary fw-bold m-0">Zahraa Alaaeddine</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarCollapse" />
                <Navbar.Collapse id="navbarCollapse" className="justify-content-between py-4 py-lg-0">
                    <Nav className="ms-auto py-0">
                        <Nav.Link href="#home" className="nav-item nav-link active">Home</Nav.Link>
                        <Nav.Link href="#about" className="nav-item nav-link">About</Nav.Link>
                        <Nav.Link href="#skill" className="nav-item nav-link">Skills</Nav.Link>
                       
                    </Nav>
                  
                    <Nav className="me-auto py-0">
                    <Nav.Link href="#service" className="nav-item nav-link">Services</Nav.Link>
                        <Nav.Link href="#project" className="nav-item nav-link">Projects</Nav.Link>
                   
                        <Nav.Link href="#contact" className="nav-item nav-link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
