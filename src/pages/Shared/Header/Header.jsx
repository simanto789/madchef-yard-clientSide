import React from 'react';
import './header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>

            {/* header */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='fs-3 fw-bolder text-danger' href="#home">MadChef Yard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='fw-bolder' href="#home">Home</Nav.Link>
                            <Nav.Link className='fw-bolder' href="#blog">Blog</Nav.Link>
                            <Nav.Link className='fw-bolder' href="#about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <button type="button" className="btn btn-outline-danger">Log in</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* header */}
        </Container>
    );
};

export default Header;