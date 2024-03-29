import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
	secondaryBar: {
		zIndex: 0,
		background: '#18202c',
		color: 'white',
		padding: '10px 0'
	},
	menuButton: {
		marginLeft: -theme.spacing(1)
	},
	iconButtonAvatar: {
		padding: 4
	},
	link: {
		textDecoration: 'none',
		color: lightColor,
		'&:hover': {
			color: theme.palette.common.white
		}
	},
	button: {
		borderColor: lightColor
	}
});

function Header(props) {
	const { classes, onDrawerToggle } = props;

	return (
		<React.Fragment>
			{/*<AppBar*/}
			{/*	color='secondary'*/}
			{/*	position='sticky'*/}
			{/*	elevation={0}*/}
			{/*	className={classes.secondaryBar}>*/}
			{/*	/!*<Toolbar>*!/*/}
			{/*	/!*	<Grid container spacing={1} alignItems='center'>*!/*/}
			{/*	/!*		<Hidden smUp>*!/*/}
			{/*	/!*			/!*<Grid item>*!/*!/*/}
			{/*	/!*			/!*	<IconButton*!/*!/*/}
			{/*	/!*			/!*		color='inherit'*!/*!/*/}
			{/*	/!*			/!*		aria-label='open drawer'*!/*!/*/}
			{/*	/!*			/!*		onClick={onDrawerToggle}*!/*!/*/}
			{/*	/!*			/!*		className={classes.menuButton}>*!/*!/*/}
			{/*	/!*			/!*		<MenuIcon />*!/*!/*/}
			{/*	/!*			/!*	</IconButton>*!/*!/*/}
			{/*	/!*			/!*</Grid>*!/*!/*/}
			{/*	/!*		</Hidden>*!/*/}
			{/*	/!*		<Grid item xs />*!/*/}
			{/*	/!*		/!*<Grid item>*!/*!/*/}
			{/*	/!*		/!*	<Link className={classes.link} href='#' variant='body2'>*!/*!/*/}
			{/*	/!*		/!*		Go to docs*!/*!/*/}
			{/*	/!*		/!*	</Link>*!/*!/*/}
			{/*	/!*		/!*</Grid>*!/*!/*/}
			{/*	/!*		/!*<Grid item>*!/*!/*/}
			{/*	/!*		/!*	<Tooltip title='Alerts • No alerts'>*!/*!/*/}
			{/*	/!*		/!*		<IconButton color='inherit'>*!/*!/*/}
			{/*	/!*		/!*			<NotificationsIcon />*!/*!/*/}
			{/*	/!*		/!*		</IconButton>*!/*!/*/}
			{/*	/!*		/!*	</Tooltip>*!/*!/*/}
			{/*	/!*		/!*</Grid>*!/*!/*/}
			{/*	/!*		/!*<Grid item>*!/*!/*/}
			{/*	/!*		/!*	<IconButton color='inherit' className={classes.iconButtonAvatar}>*!/*!/*/}
			{/*	/!*		/!*		<Avatar src='/static/images/avatar/1.jpg' alt='My Avatar' />*!/*!/*/}
			{/*	/!*		/!*	</IconButton>*!/*!/*/}
			{/*	/!*		/!*</Grid>*!/*!/*/}
			{/*	/!*	</Grid>*!/*/}
			{/*	/!*</Toolbar>*!/*/}
			{/*</AppBar>*/}
			<AppBar
				component='div'
				className={classes.secondaryBar}
				color='secondary'
				position='static'
				elevation={0}>
				<Toolbar>
					<Grid container alignItems='center' spacing={1}>
						<Grid item xs>
							<Typography color='inherit' variant='h5' component='h1'>
								{props.heading}                                                {/*here is here u write the name */}
							</Typography>
						</Grid>
						<Grid item>
							<IconButton color='inherit' className={classes.iconButtonAvatar}>
								<Avatar src='/static/images/avatar/1.jpg' alt='My Avatar' />
							</IconButton>
						</Grid>
						{/*<Grid item>*/}
						{/*	<Button*/}
						{/*		className={classes.button}*/}
						{/*		variant='outlined'*/}
						{/*		color='inherit'*/}
						{/*		size='small'>*/}
						{/*		Web setup*/}
						{/*	</Button>*/}
						{/*</Grid>*/}
						{/*<Grid item>*/}
						{/*	<Tooltip title='Help'>*/}
						{/*		<IconButton color='inherit'>*/}
						{/*			<HelpIcon />*/}
						{/*		</IconButton>*/}
						{/*	</Tooltip>*/}
						{/*</Grid>*/}
					</Grid>
				</Toolbar>
			</AppBar>
			<AppBar
				component='div'
				className={classes.secondaryBar}
				color='secondary'
				position='static'
				elevation={0}>
				<Tabs value={0} textColor='inherit'>
					<Tab textColor='inherit' label={props.tabnames.tabone} />
					<Tab textColor='inherit' label={props.tabnames.tabtwo} />
					<Tab textColor='inherit' label={props.tabnames.tabthree} />
					<Tab textColor='inherit' label={props.tabnames.tabfour} />
				</Tabs>
			</AppBar>
		</React.Fragment>
	);
}

export default withStyles(styles)(Header);
