import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PublicIcon from '@material-ui/icons/Public';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 'Statistics',
        number: 0,
        children: [
            {
                id: 'Overview',
                icon: <EqualizerIcon />,
                active: false,
                number: 0
            },
            { id: 'Friends', icon: <PeopleIcon />, active: true, number: 1 },
            { id: 'Blog Posts', icon: <PublicIcon />, active: false, number: 2 }
        ]
    },
    {
        id: 'Events',
        number: 1,
        children: [
            {
                id: 'Stock Cooker',
                icon: <SettingsIcon />,
                active: false,
                number: 0
            },
            {
                id: 'Coming Soon',
                icon: <SettingsEthernetIcon />,
                active: false,
                number: 1
            }
        ]
    }
];

const styles = (theme) => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
        }
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white
    },
    itemActiveItem: {
        color: '#4fc3f7'
    },
    itemPrimary: {
        fontSize: 'inherit'
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2)
    },
    divider: {
        marginTop: theme.spacing(2)
    }
});

function Navigator(props) {
    const { classes, ...other } = props;

    return (
        <Drawer variant='permanent' {...other}>
            <List disablePadding>
                <ListItem
                    className={clsx(
                        classes.firebase,
                        classes.item,
                        classes.itemCategory
                    )}>
                    YouGoComm
                </ListItem>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <ListItem
                        className={clsx(classes.item, classes.itemCategory)}>
                        <ListItemIcon className={classes.itemIcon}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.itemPrimary
                            }}>
                            Back to Home
                        </ListItemText>
                    </ListItem>
                </Link>
                {categories.map(({ id, children, number }) => (
                    <React.Fragment key={id}>
                        <ListItem className={classes.categoryHeader}>
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary
                                }}>
                                {id}
                            </ListItemText>
                        </ListItem>
                        {children.map(
                            ({
                                id: childId,
                                icon,
                                active,
                                number: childNumber
                            }) => (
                                <Link
                                    key={childId}
                                    to={`/dashboard/${childId
                                        .toLowerCase()
                                        .replace(' ', '-')}`}>
                                    <ListItem
                                        button
                                        className={clsx(
                                            classes.item,
                                            active && classes.itemActiveItem
                                        )}>
                                        <ListItemIcon
                                            className={classes.itemIcon}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.itemPrimary
                                            }}>
                                            {childId}
                                        </ListItemText>
                                    </ListItem>
                                </Link>
                            )
                        )}

                        <Divider className={classes.divider} />
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
}

export default withStyles(styles)(Navigator);
