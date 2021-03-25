// @packages
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { makeStyles } from '@material-ui/core/styles';

//@scripts
import Message from './Message';

// @styles
const useStyles = makeStyles(() => ({
    paper: {
        height: 'calc(100vh - 150px)'
    },
    list: {
        display: 'grid'
    }
}));

const Messages = ({ messages, name }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={2}>
            <ScrollToBottom className={classes.paper}>
                <List className={classes.list}>
                    {messages.map((message, index) => (
                        <Message
                            key={index}
                            message={message}
                            name={name}
                        />
                    ))}
                </List>
            </ScrollToBottom>
        </Paper>
    );
}

export default Messages;