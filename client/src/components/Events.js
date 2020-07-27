import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Carousel from './Carousel';

const Events = () => {
	const slideData = [
		{
			index: 0,
			headline: 'New Fashion Apparel',
			button: 'Shop now',
			src:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
		},
		{
			index: 1,
			headline: 'In The Wilderness',
			button: 'Book travel',
			src:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
		},
		{
			index: 2,
			headline: 'For Your Current Mood',
			button: 'Listen',
			src:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
		},
		{
			index: 3,
			headline: 'Focus On The Writing',
			button: 'Get Focused',
			src:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
		}
	];
	return (
		<React.Fragment>
			<Navbar />
			<div style={{ margin: '100px 0 100px 0' }}>
				<Carousel heading='Example Slider' slides={slideData} />
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Events;
