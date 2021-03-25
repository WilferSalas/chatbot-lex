// @scripts
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// @styles
const useStyles = makeStyles(() => ({
    button: {
        height: '100%'
    }
}));

const Input = ({
    message,
    onChange,
    onSendMessage
}) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    id="chat-input"
                    label=""
                    onChange={event => onChange(event)}
                    onKeyPress={event => event.key === 'Enter'
                        ? onSendMessage(event)
                        : null}
                    placeholder="Escribe algo"
                    value={message}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    className={classes.button}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={onSendMessage}
                >
                    Enviar
                </Button>
            </Grid>
        </Grid>
    );
}

export default Input