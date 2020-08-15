import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from "./Sidebar";


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


const mainFeaturedPost = {
    title: "All Blogs",
    image: 'https://source.unsplash.com/random',
};

const sidebar = {
    title:"HMM",
    description:
        'Write a blogpost',

};

const posts = [{title:"first post",writer:"naman",time:"12:12pm",content:"Hi this is a post"}];

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}