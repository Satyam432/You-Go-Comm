import React from 'react';
import AppNavbar from './AppNavbar';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import './AccountDetails.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '100%'
		}
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500]
	},
	large: {
		width: theme.spacing(30),
		height: theme.spacing(30)
	}
}));

const AccountDetails = () => {
	const classes = useStyles();

	const onChangeHandler = (e) => {
		console.log(e.target.files[0]);
	};
	return (
		<React.Fragment>
			<AppNavbar />
			<Container>
				<Row className='register_card_container'>
					<Col xs='12' className='register_card_heading m-auto'>
						Account Details
					</Col>
					<Col xs='12' className='register_card_form'>
						<form
							className={classes.root}
							noValidate
							autoComplete='off'>
							<Row>
								<Col xs='6' className='m-auto text-center'>
									<input
										accept='image/*'
										className={classes.input}
										style={{ display: 'none' }}
										id='raised-button-file'
										multiple
										type='file'
										onChange={onChangeHandler}
									/>
									<label htmlFor='raised-button-file'>
										<Avatar
											className={
												(classes.orange, classes.large)
											}>
											N
										</Avatar>
									</label>
								</Col>
							</Row>
							<Row>
								<Col xs={{ size: 5, offset: 1 }}>
									<TextField
										id='outlined-basic'
										label='First Name'
										variant='outlined'
									/>
								</Col>
								<Col xs='5'>
									<TextField
										id='outlined-basic'
										label='Last Name'
										variant='outlined'
									/>
								</Col>
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default AccountDetails;
