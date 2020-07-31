import React from 'react';
import { Row, Col } from 'reactstrap';
import ygc_logo from '../assets/images/ygc-logo.png';

const LogoContainer = () => {
	return (
		<div className='logo_container ml-md-4'>
			<Row>
				<Col xs='auto' className='m-auto'>
					<img
						src={ygc_logo}
						alt='main_logo'
						className='img-fluid'
						id='logo_img'
					/>
				</Col>
			</Row>
			<Row>
				<Col xs='auto' className='m-auto'>
					<div id='logo_name'>YouGoComm</div>
				</Col>
			</Row>
		</div>
	);
};

export default LogoContainer;
