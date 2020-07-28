import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';

const Events = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Navbar />
			<div style={{ margin: '100px 0' }}>
				<Carousel heading='Example Slider' />
			</div>
			<Footer />
		</div>
	);
};

export default Events;
