import React from 'react';
import Navbar from './AppNavbar';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import CardContainer from './CardContainer';
import LogoContainer from './LogoContainer';
import InstaContainer from './InstaContainer';

const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Container fluid>
				<Row>
					<Col xs='12' md='3'>
						<LogoContainer />
						<InstaContainer />
					</Col>
					<Col xs='12' md='8' className='mx-auto'>
						<div className='all_cards_container'>
							<CardContainer />
							<CardContainer />
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
