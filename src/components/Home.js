import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';
import ygc_logo from './assets/images/ygc-logo.png';
import Card from './CardContainer';
import stock_image from './assets/images/nn.PNG';
import Footer from './Footer';
import InstagramEmbed from 'react-instagram-embed';

const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className='row logo-container'>
				<div className='col-12 col-md-3'>
					<div className='logo-border'>
						<div className='row'>
							<div className='col-12'>
								<img
									src={ygc_logo}
									alt=''
									className='img-fluid'
									id='ygc_logo'
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-12'>
								<div id='logo-name'>YouGoComm</div>
								<br />
							</div>
						</div>
					</div>
					<br />
					<br />
					<div className='row d-none d-md-block'>
						<div className='col-12'>
							<InstagramEmbed
								url='https://www.instagram.com/p/CCu2Yk-lQ7R/'
								maxWidth='100%'
								hideCaption={true}
								containerTagName='div'
								protocol=''
								injectScript
								onLoading={() => {}}
								onSuccess={() => {}}
								onAfterRender={() => {}}
								onFailure={() => {}}
							/>
						</div>
					</div>
				</div>

				<div className='col-12 col-md-8 mx-auto'>
					<Card />
					<br /> <br />
					<Card />
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
