import React from 'react';
import Navbar from './AppNavbar';
import Footer from './Footer';
import Carousel from './Carousel';
import { Container } from 'reactstrap';

const Events = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Container fluid style={{ overflow: 'hidden' }}>
				<div style={{ margin: '100px 0' }}>
					<Carousel heading='Events Slider' />
				</div>
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default Events;
