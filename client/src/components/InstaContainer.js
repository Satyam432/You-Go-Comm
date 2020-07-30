import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Row, Col } from 'reactstrap';

const InstaContainer = () => {
	return (
		<div className='insta_container ml-md-4'>
			<Row className='mx-0'>
				<Col xs='12' className='m-0 p-0'>
					<InstagramEmbed
						url='https://www.instagram.com/p/CC0jtTyHUgy/'
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
				</Col>
			</Row>
		</div>
	);
};

export default InstaContainer;
