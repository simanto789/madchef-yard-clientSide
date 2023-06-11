import './header.css';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container>
            {/* header */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='fs-3 fw-bolder text-danger' href="#home">MadChef Yard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink exact className='fw-bolder nav-link' activeClassName='active' to="/">Home</NavLink>
                            <NavLink className='fw-bolder nav-link' activeClassName='active' to="/blog">Blog</NavLink>
                        </Nav>
                        <Nav>
                            {user && (
                                <NavLink
                                    className="nav-link"
                                    title={user.displayName}
                                >
                                    <div className="text-center">
                                        {user.displayName}
                                        <img style={{height: '40px'}} className='rounded' src={user.photoURL} alt="" />
                                    </div>
                                </NavLink>
                            )}
                            {user ? (
                                <NavLink
                                    className='fw-bolder nav-link outline-danger'
                                    onClick={handleLogOut}
                                >
                                    logOut
                                </NavLink>
                            ) : (
                                <NavLink
                                    className='fw-bolder nav-link outline-danger'
                                    activeClassName='active'
                                    to="/login"
                                >
                                    login
                                </NavLink>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* header */}
        </Container>
    );
};

export default Header;
