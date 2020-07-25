import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	// return (
	// 	<header id='header'>
	// 		<nav className='navbar navbar-expand'>
	// 			<h1 className='navbar-brand'>
	// 				<Link to='/'>YouGoComm</Link>
	// 			</h1>
	// 			<div class='navbar-nav'>
	// 				<ul>
	// 					<li>
	// 						<Link className='nav-item nav-link' to='/'>
	// 							Home
	// 						</Link>
	// 					</li>
	// 					<li>
	// 						<Link className='nav-item nav-link' to='/events'>
	// 							Events
	// 						</Link>
	// 					</li>
	// 					<li>
	// 						<Link className='nav-item nav-link' to='/dashboard'>
	// 							Dashboard
	// 						</Link>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 		</nav>
	// 	</header>
	// );
	return (
		<nav class='navbar sticky-top navbar-expand-md navbar-light'>
			<a class='navbar-brand' href='#'>
				YouGoComm
			</a>
			<button
				class='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'>
				<span class='navbar-toggler-icon'></span>
			</button>
			<div class='collapse navbar-collapse' id='navbarNav'>
				<ul class='navbar-nav mr-auto'>
					<li class='nav-item active nav1'>
						<Link to='/' class='nav-link' href='#' id='first'>
							Home
						</Link>
					</li>
					<li class='nav-item nav1 active'>
						<Link to='/events' class='nav-link pl-4'>
							Events
						</Link>
					</li>
					<li class='nav-item nav1 active'>
						<Link to='/' class='nav-link pl-4'>
							Schedule
						</Link>
					</li>
				</ul>
				<ul class='navbar-nav'>
					<li class='nav-item active mr-5'>
						<Link
							to='/dashboard'
							class='nav-link'
							id='dashboard'
							href='#'>
							Dashboard
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
