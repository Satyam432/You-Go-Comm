import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));


export default function Sidebar(props) {
    const classes = useStyles();
    const { archives,description,title } = props;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>

                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>
                    <Link to="/dashboard/blog-posts/write" >
                    {description}
                    </Link>
                </Typography>
            </Paper>

        </Grid>
    );
}

Sidebar.propTypes = {
    archives: PropTypes.array,
    description: PropTypes.string,
    social: PropTypes.array,
    title: PropTypes.string,
};