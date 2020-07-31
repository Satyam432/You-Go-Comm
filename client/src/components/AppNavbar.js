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

const AppNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<Navbar expand='md' className='sticky-top' light>
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
							to='/dashboard'
							className='nav-link'
							id='dashboard'>
							Dashboard
						</Link>
					</NavItem>
					<NavItem active className='mr-5'>
						<a
							href='http://192.168.99.100:5000/api/auth/google/'
							className='nav-link'
							id='dashboard'>
							Login
						</a>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default AppNavbar;
