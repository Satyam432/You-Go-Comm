import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Blog from "./BlogTemplate/Blog";


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

function BlogContent(props) {
    const { classes } = props;

    return (
        <div >
            <Paper className={classes.paper}>
                <div style={{marginTop:"2%"}}>
                <Blog></Blog>
                </div>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(BlogContent);
