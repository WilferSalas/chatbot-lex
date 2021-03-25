// @scripts
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// @styles
const useStyles = makeStyles(() => ({
    appBar: {
        justifyContent: 'space-between'
    },
    icon: {
        color: 'white'
    }
}));

const ChatHeader = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.appBar}>
                <Typography variant="h6">
                    Chatea con Lex
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default ChatHeader;