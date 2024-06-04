import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MessageRoom = () => {
    const [messages, setMessages] = useState('');
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchMessages();
    }, [])

    const fetchMessages = () => {
        axios.get('http://127.0.0.1:8000/message/')
        .then (response => {
            setMessages(response.data);
        })
        .catch(error => {
            console.log('ERROR: ', error);
        });
    };

    const sendMessage = () => {
        axios.post()
    }



    
    
} 
    
    
    export default MessageRoom
