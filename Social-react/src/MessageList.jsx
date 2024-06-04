import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { useAuth } from '../context/AuthContext';
import CreateNewMessage from './CreateNewMessage';

const MessageList = () => {
    const { welcomeMessage, setWelcomeMessage } = useAuth();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'get', 
            url: 'http://127.0.0.1:8000/message/',  // getting information from the backend
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        })
            .then(response => {
                setMessages(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('ERRORR:', error);
                setLoading(false);
            });
    }, [auth.accessToken]);


    return (
        <div>
            {/* {loading ? (
                <p>Hold On, Loading your messages Now!! </p>
            )} */}
        </div>
    )
}

export default MessageList