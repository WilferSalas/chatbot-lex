// @scripts
import Grid from '@material-ui/core/Grid';
import React from 'react';

//@scripts
import ChatHeader from '../controls/ChatHeader';
import Input from '../controls/Input';
import Messages from '../controls/Messages';

const Chat = () => {
    return (
        <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6}>
                <ChatHeader />
                <Messages
                    messages={[]}
                    name={[]}
                />
                <Input
                    message={[]}
                />
            </Grid>
            <Grid item xs={3} />
        </Grid>
    );
}

export default Chat;