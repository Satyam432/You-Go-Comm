import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import StockCooker from '../StockCooker';
import { useScrollTrigger } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { Switch, Route, Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        background: 'transparent',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        background: '#e6e6e6'
    },
    iconStyle: {
        marginRight: '5px',
        fontSize: '1.2em'
    },
    itemTextStyle: {
        fontSize: '1em'
    },
    selectedItem: {
        borderLeft: 'solid 6px black',
        backgroundColor: '#000'
    },
    dashTitle: {
        paddingTop: '20px',
        textTransform: 'bold',
        color: '#000',
        fontFamily: 'Merriweather'
    },
    navbarTitle: {
        textTransform: 'bold',
        color: '#000'
    }
}));

function Dashboard(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const itemListOne = [
        { id: 1, text: 'Overview' },
        { id: 2, text: 'Friends' },
        { id: 3, text: 'Blogs' }
    ];

    const itemListTwo = [{ id: 1, text: 'Stock Cooker' }];

    const drawer = (
        <div style={{ background: '#ffffff' }}>
            <div className={classes.toolbar}>
                <Typography
                    className={classes.dashTitle}
                    align='center'
                    variant='h5'>
                    YouGoComm
                </Typography>
            </div>
            <Divider />
            <List>
                {itemListOne.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        classes={{
                            selected: classes.selectedItem
                        }}
                        selected={selectedIndex === item.id}
                        onClick={(event) =>
                            handleListItemClick(event, item.id)
                        }>
                        <EditIcon className={classes.iconStyle} />
                        <ListItemText>
                            <Typography className={classes.itemTextStyle}>
                                {item.text}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {itemListTwo.map((item) => (
                    <Link
                        to='/dashboard/stock-cooker'
                        style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem
                            button
                            key={item.text}
                            classes={{
                                selected: classes.selectedItem
                            }}
                            selected={
                                selectedIndex === item.id + itemListOne.length
                            }
                            onClick={(event) =>
                                handleListItemClick(
                                    event,
                                    item.id + itemListOne.length
                                )
                            }>
                            <EditIcon className={classes.iconStyle} />
                            <ListItemText>
                                <Typography className={classes.itemTextStyle}>
                                    {item.text}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 20
        });

        return (
            <Slide appear={false} direction='down' in={!trigger}>
                {children}
            </Slide>
        );
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    position='fixed'
                    elevation={2}
                    className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant='h6'
                            noWrap
                            className={classes.navbarTitle}>
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            <nav className={classes.drawer} aria-label='mailbox folders'>
                <Hidden smUp implementation='css'>
                    <Drawer
                        container={container}
                        variant='temporary'
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation='css'>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant='permanent'
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route
                        path='/dashboard/stock-cooker'
                        exact
                        component={StockCooker}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default Dashboard;
