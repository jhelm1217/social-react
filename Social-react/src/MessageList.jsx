import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './context';
import CreateMessage from './CreateMessage';

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const interval = setInterval (() => {
            fetchMessages();
        }, 2000); //every 2 seconds 
        return () => clearInterval(interval);
    }, []);

    const fetchMessages = () => {
        axios.get('http://127.0.0.1:8000/get-messages/', {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        })
        .then (response => {
            setMessages(response.data);
        })
        .catch(error => {
            console.log('ERROR: ', error);
        });
    };


    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message])
    }


  
 
 
    return (
        <div>
            <h2>Message Board</h2>
            
            <div>
                {messages.map((message) => (
                    <div key={message.id}>
                        <strong>{message.user.username}:</strong> {message.content}
                    </div>
                    
            ))}
            <CreateMessage addMessage={addMessage} />
            </div>
        </div>
    );
    

}
export default MessageList;