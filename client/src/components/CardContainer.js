import React from 'react';
import stock_image from './assets/images/nn.PNG';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CardContainer = () => {
	return (
		<React.Fragment>
			<div className='col-12 card-container'>
				<div className='row'>
					<div className='col-12 col-md-8 cards-heading'>
						Stock Cooker
					</div>
					<div className='col-12 col-md-4 cards-date'>
						<div>15-Aug, 2020</div>
						<div>
							<img src='https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-16.png' />
							<small className='cards-time'> 7:00 PM</small>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<img src={stock_image} alt='' className='cards-image' />
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<button className='cards-button'>
							<Link to='/events'>Show Details</Link>
						</button>
					</div>
				</div>
			</div>
			<br />
			<br />
		</React.Fragment>
	);
};

export default CardContainer;
