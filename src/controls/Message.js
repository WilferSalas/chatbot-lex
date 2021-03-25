// @packages
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import ReactEmoji from 'react-emoji';
import { makeStyles } from '@material-ui/core/styles';

// @styles
const useStyles = makeStyles(() => ({
    left: {
        backgroundColor: '#D9DCDF',
        borderRadius: 10,
        color: 'black',
        margin: 10,
        width: 500
    },
    listItemText: {
        '& .MuiTypography-colorTextSecondary': {
            color: '#FFFFFF99'
        }
    },
    right: {
        backgroundColor: '#3A71B7',
        borderRadius: 10,
        color: 'white',
        justifySelf: 'right',
        margin: 10,
        marginLeft: 220,
        width: 500
    }
}));

const Message = ({ message, name }) => {
    const classes = useStyles();

    const { user, text } = message;

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        <ListItem
            className={isSentByCurrentUser
                ? classes.right
                : classes.left}
        >
            <ListItemText
                className={isSentByCurrentUser ? classes.listItemText : null}
                primary={ReactEmoji.emojify(text)}
                secondary={user}
            />
        </ListItem>
    );
}

export default Message;