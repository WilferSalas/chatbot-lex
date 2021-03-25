// @scripts
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';

//@scripts
import ChatHeader from '../controls/ChatHeader';
import Input from '../controls/Input';
import Messages from '../controls/Messages';

const Chat = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([{ user: 'lex', text: 'Hola, bienvenido a Chatea con Lex' }]);

    const handleOnChange = (event) => {
        setMessage(event.target.value);
    };

    const handleOnSendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, { user: 'usuario', text: message }]);
        setMessage('');
    };

    return (
        <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6}>
                <ChatHeader />
                <Messages
                    messages={messages}
                    name='usuario'
                />
                <Input
                    message={message}
                    onChange={handleOnChange}
                    onSendMessage={handleOnSendMessage}
                />
            </Grid>
            <Grid item xs={3} />
        </Grid>
    );
}

export default Chat;