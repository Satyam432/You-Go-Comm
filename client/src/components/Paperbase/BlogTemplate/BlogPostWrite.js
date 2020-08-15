import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import MainFeaturedPost from "./MainFeaturedPost";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: "auto",
        overflow: "hidden"
    },
    searchBar: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    },
    searchInput: {
        fontSize: theme.typography.fontSize
    },
    block: {
        display: "block"
    },
    addUser: {
        marginRight: theme.spacing(1)
    },
    contentWrapper: {
        margin: "40px 16px"
    }
});
const mainFeaturedPost = {
    title: "Write Your Blog",
    image: 'https://source.unsplash.com/random',
};

function BlogPostWrite(props) {
    const { classes } = props;
    let history = useHistory();

    return (
        <div >
            <Paper className={classes.paper}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Typography>
                    <form style={{marginLeft:"2%"}}>
                        <div>
                            <label>Title:</label><br/>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Content:</label><br/>
                            <textarea></textarea>
                        </div>
                        <div>
                            <Button onClick={() => history.goBack()}>Submit</Button>
                        </div>
                    </form>
                </Typography>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(BlogPostWrite);