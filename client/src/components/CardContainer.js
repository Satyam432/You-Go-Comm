import React from 'react';
import stock_image from '../assets/images/nn.PNG';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Row, Col } from 'reactstrap';

const CardContainer = () => {
	return (
		<Row className='card_container'>
			<Col xs='12' className='card_heading'>
				<Row>
					<Col xs='12' md='7' className='card_heading_name'>
						Stock Cooker
					</Col>
					<Col
						xs='12'
						md={{ size: 4, offset: 1 }}
						className='card_heading_details'>
						15-Aug, 2020
						<div>
							<img src='https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-16.png' />
							<small className='cards-time'> 7:00 PM</small>
						</div>
					</Col>
				</Row>
			</Col>
			<Col xs='12' className='card_body'>
				<Row>
					<Col xs='11' md='10' className='mx-auto'>
						<img
							src={stock_image}
							alt=''
							className='img-fluid card_body_image'
						/>
					</Col>
					<Col xs='12' className='mx-auto'>
						<button className='card_body_btn'>
							<Link to='/'>Show Details</Link>
						</button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default CardContainer;
