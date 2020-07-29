import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar sticky-top navbar-expand-md navbar-light'>
			<a className='navbar-brand' href='/'>
				YouGoComm
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active nav1'>
						<Link to='/' className='nav-link' href='#' id='first'>
							Home
						</Link>
					</li>
					<li className='nav-item nav1 active'>
						<Link to='/events' className='nav-link pl-4'>
							Events
						</Link>
					</li>
				</ul>
				<ul className='navbar-nav'>
					<li className='nav-item active mr-5'>
						<Link
							to='/dashboard'
							className='nav-link'
							id='dashboard'>
							Dashboard
						</Link>
					</li>
					<li className='nav-item active mr-5'>
						<Link
							to='/dashboard'
							className='nav-link'
							id='dashboard'>
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
