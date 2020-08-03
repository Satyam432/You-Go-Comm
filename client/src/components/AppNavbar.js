import React, { useState } from 'react';
import './AppNavbar.css';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { USER_LOGOUT, GOOGLE_LOGIN } from '../variables';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const toggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <React.Fragment>
            <Navbar expand='md' className='sticky-top' id='AppNavbarBig' light>
                <NavbarBrand href='/' id='nav_brand'>
                    YouGoComm
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse
                    isOpen={isOpen}
                    navbar
                    style={{ width: '100%', padding: '15px 0' }}>
                    <Nav navbar className='ml-0'>
                        <NavItem active className='nav1'>
                            <Link to='/' className='nav-link' id='first'>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem active className='nav1 '>
                            <Link to='/events' className='nav-link pl-4'>
                                Events
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav navbar className='ml-auto'>
                        <NavItem active className='mr-5'>
                            <Link
                                to='/account-details'
                                className='btn nav-link'
                                id='dashboard'>
                                Dashboard
                            </Link>
                        </NavItem>
                        <NavItem active className='mr-5'>
                            {isAuthenticated ? (
                                <a
                                    href={USER_LOGOUT}
                                    className='nav-link btn'
                                    id='dashboard'>
                                    Logout
                                </a>
                            ) : (
                                <a
                                    href={GOOGLE_LOGIN}
                                    className='nav-link btn'
                                    id='dashboard'>
                                    Login
                                </a>
                            )}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Navbar className='sticky-top' id='AppNavbarSmall' light>
                <NavbarBrand href='/' id='nav_brand'>
                    YouGoComm
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse
                    isOpen={isOpen}
                    navbar
                    style={{ width: '100%', padding: '15px 0' }}>
                    <Nav navbar className='ml-0'>
                        <NavItem active className='nav1'>
                            <Link to='/' className='nav-link pl-4'>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem active className='nav1 '>
                            <Link to='/events' className='nav-link pl-4'>
                                Events
                            </Link>
                        </NavItem>
                        <NavItem active className='nav1'>
                            <Link
                                to='/account-details'
                                className='nav-link pl-4'>
                                Dashboard
                            </Link>
                        </NavItem>
                        <NavItem active className='nav1'>
                            {isAuthenticated ? (
                                <a href={USER_LOGOUT} className='nav-link pl-4'>
                                    Logout
                                </a>
                            ) : (
                                <a
                                    href={GOOGLE_LOGIN}
                                    className='nav-link pl-4'>
                                    Login
                                </a>
                            )}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default AppNavbar;
