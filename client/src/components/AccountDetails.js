import React, { useState } from 'react';
import AppNavbar from './AppNavbar';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import {
	makeStyles,
	createMuiTheme,
	MuiThemeProvider
} from '@material-ui/core/styles';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

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
		width: theme.spacing(24),
		height: theme.spacing(24)
	},
	notchedOutline: {
		borderWidth: '2px',
		borderColor: 'black'
	}
}));

const formLabelsTheme = createMuiTheme({
	overrides: {
		MuiFormLabel: {
			asterisk: {
				color: '#db3131',
				'&$error': {
					color: '#db3131'
				}
			}
		}
	}
});

const AccountDetails = () => {
	const classes = useStyles();

	const [formFields, setFormFields] = useState({
		firstName: '',
		lastName: '',
		birthDate: '',
		mobile: '',
		college: '',
		course: '',
		city: '',
		state: '',
		linkedIn: ''
	});

	const [fieldErrors, setFieldErrors] = useState({
		firstNameError: '',
		lastNameError: '',
		birthDateError: '',
		courseError: '',
		collegeError: '',
		mobileError: '',
		cityError: '',
		stateError: '',
		linkedInError: ''
	});

	const changeHandler = (e) => {
		setFormFields({
			...formFields,
			[e.target.id]: e.target.value
		});
	};

	const validate = () => {
		let isError = false;

		let firstNameError = '';
		let lastNameError = '';
		let birthDateError = '';
		let courseError = '';
		let collegeError = '';
		let mobileError = '';
		let cityError = '';
		let stateError = '';
		let linkedInError = '';

		if (
			formFields.firstName.length < 2 ||
			formFields.firstName.length > 30
		) {
			firstNameError = 'Enter a valid firstname';
			isError = true;
		}

		if (formFields.lastName.length < 2 || formFields.lastName.length > 30) {
			lastNameError = 'Enter a valid lastname';
			isError = true;
		}

		const date = new Date(formFields.birthDate);
		const today = new Date();
		const age =
			Math.abs(today.getTime() - date.getTime()) /
			(1000 * 3600 * 24 * 365.25);

		if (age < 16 || age > 60) {
			birthDateError = 'Required age must be 16 or older';
			isError = true;
		}

		if (formFields.mobile.length !== 0) {
			if (+formFields.mobile <= 0 || formFields.mobile.length !== 10) {
				mobileError = 'Enter a valid mobile number';
				isError = true;
			}
		}

		if (formFields.linkedIn.length !== 0) {
			if (formFields.linkedIn.search('linkedin') === -1) {
				linkedInError = 'Enter a valid LinkedIn URL';
				isError = true;
			}
		}

		setFieldErrors({
			firstNameError,
			lastNameError,
			birthDateError,
			courseError,
			collegeError,
			mobileError,
			cityError,
			stateError,
			linkedInError
		});
		console.log(fieldErrors);
		return isError;
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const error = validate();

		if (!error) {
			setFormFields({
				firstName: '',
				lastName: '',
				birthDate: '',
				mobile: '',
				college: '',
				course: '',
				city: '',
				state: '',
				linkedIn: ''
			});

			setFieldErrors({
				firstNameError: '',
				lastNameError: '',
				birthDateError: '',
				courseError: '',
				collegeError: '',
				mobileError: '',
				cityError: '',
				stateError: '',
				linkedInError: ''
			});
		}
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
						<MuiThemeProvider theme={formLabelsTheme}>
							<form
								className={classes.root}
								autoComplete='on'
								onSubmit={submitHandler}>
								<Row>
									<Col
										xs='12'
										md='auto'
										className='m-auto pl-4'>
										<Avatar
											className={
												(classes.orange, classes.large)
											}>
											N
										</Avatar>

										<br />
									</Col>
								</Row>
								<Row>
									<Col xs='12' md={{ size: 4, offset: 2 }}>
										<TextField
											required
											id='firstName'
											onChange={changeHandler}
											value={formFields.firstName}
											helperText={
												fieldErrors.firstNameError
											}
											error={
												fieldErrors.firstNameError !==
												''
											}
											label='First Name'
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
									<Col xs='12' md='4'>
										<TextField
											required
											id='lastName'
											onChange={changeHandler}
											label='Last Name'
											value={formFields.lastName}
											helperText={
												fieldErrors.lastNameError
											}
											error={
												fieldErrors.lastNameError !== ''
											}
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
								</Row>
								<Row>
									<Col xs='12' md={{ size: 8, offset: 2 }}>
										<TextField
											required
											id='birthDate'
											label='Birth Date'
											value={formFields.birthDate}
											helperText={
												fieldErrors.birthDateError
											}
											error={
												fieldErrors.birthDateError !==
												''
											}
											type='date'
											onChange={changeHandler}
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
											InputLabelProps={{ shrink: true }}
										/>
									</Col>
								</Row>
								<Row>
									<Col xs='12' md={{ size: 8, offset: 2 }}>
										<TextField
											id='mobile'
											onChange={changeHandler}
											label='Mobile Number'
											value={formFields.mobile}
											helperText={fieldErrors.mobileError}
											error={
												fieldErrors.mobileError !== ''
											}
											type='number'
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
								</Row>
								<Row>
									<Col xs='12' md={{ size: 4, offset: 2 }}>
										<TextField
											required
											id='course'
											onChange={changeHandler}
											label='Ongoing Degree / Course '
											value={formFields.course}
											helperText={fieldErrors.courseError}
											error={
												fieldErrors.courseError !== ''
											}
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
									<Col xs='12' md='4'>
										<TextField
											required
											id='college'
											onChange={changeHandler}
											label='Name of College / University'
											value={formFields.college}
											helperText={
												fieldErrors.collegeError
											}
											error={
												fieldErrors.collegeError !== ''
											}
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
								</Row>
								<Row>
									<Col xs='12' md={{ size: 4, offset: 2 }}>
										<TextField
											required
											id='city'
											onChange={changeHandler}
											label='City'
											value={formFields.city}
											helperText={fieldErrors.cityError}
											error={fieldErrors.cityError !== ''}
											type='text'
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
									<Col xs='12' md='4'>
										<TextField
											required
											id='state'
											onChange={changeHandler}
											label='State'
											value={formFields.state}
											helperText={fieldErrors.stateError}
											error={
												fieldErrors.stateError !== ''
											}
											type='text'
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
								</Row>
								<Row>
									<Col xs='12' md={{ size: 8, offset: 2 }}>
										<TextField
											id='linkedIn'
											onChange={changeHandler}
											label='LinkedIn Profile URL'
											value={formFields.linkedIn}
											helperText={
												fieldErrors.linkedInError
											}
											type='url'
											error={
												fieldErrors.linkedInError !== ''
											}
											variant='outlined'
											InputProps={{
												classes: {
													notchedOutline:
														classes.notchedOutline
												}
											}}
										/>
									</Col>
								</Row>
								<Row className='mt-3'>
									<Col xs='12' md={{ size: 2, offset: 5 }}>
										<button
											type='submit'
											className='register_body_btn'
											style={{ width: '100%' }}>
											Submit
										</button>
									</Col>
								</Row>
							</form>
						</MuiThemeProvider>
					</Col>
					{/* <Col xs='12'>
						<TradingViewWidget
							symbol='NASDAQ:AAPL'
							theme={Themes.DARK}
						/>
					</Col> */}
				</Row>
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default AccountDetails;
