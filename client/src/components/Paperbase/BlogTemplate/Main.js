import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export default function Main(props) {
    const classes = useStyles();
    const { posts, title } = props;

    return (
        <Grid item xs={12} md={8}>
            <Divider />
            {posts.map((post) => (
                <paper>
                    <IconButton color='inherit' className={classes.iconButtonAvatar}>
                        <Avatar src='/static/images/avatar/1.jpg' alt='My Avatar' />
                    </IconButton>
                    &nbsp;&nbsp;
                    {post.writer}
                    &nbsp;
                    {post.time}
                    <div style={{fontWeight:"bold",fontSize:"100%"}}>{post.title}</div>
                    {post.content}
                    <div>
                        <ThumbUpAltIcon fontSize='small'></ThumbUpAltIcon>
                         &nbsp;&nbsp;
                        <AddCommentIcon fontSize='small'></AddCommentIcon>
                    </div>
                    <hr></hr>
                    <div>
                        {" "}
                    </div>
                </paper>
            ))}
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};