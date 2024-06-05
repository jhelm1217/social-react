import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './context';
import CreateMessage from './CreateMessage';
import './App.css'
import { deleteMessage, editMessage } from './api';
import UploadImage from './UploadImage';
import Images from './Images';

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const interval = setInterval (() => {
            fetchMessages();
        }, 3000); //get messages every 3 seconds 
        return () => clearInterval(interval);
    }, []);

    const fetchMessages = () => {
        axios.get('http://127.0.0.1:8000/get-messages/', {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        })
        .then (response => {
            setMessages(response.data); //most recent messages on top
        })
        .catch(error => {
            console.log('ERROR: ', error);
        });
    };


    const addMessage = (message) => {
        setMessages((prevMessages) => [message, ...prevMessages]) //adds new message up top!
    }


    const handleEdit = (id,content) => {
        editMessage({ auth, messageId: id, content })
        .then(response => {
            const index = messages.findIndex(message => message.id === id);
            const updatedMessages = [...messages];

            updatedMessages[index].content = content;
            setMessages(updatedMessages);
        })
        .catch(error => {
            console.log('error editing message: ', error);
        });
    };
    
    //     editMessage(editedMessage, auth)
    //         .then(response => {
    //             // Find the index of the edited message in the messages array
    //             const index = messages.findIndex(message => message.id === id);
    //             // Create a copy of the messages array
    //             const updatedMessages = [...messages];
    //             // Update the content of the edited message in the copied array
    //             updatedMessages[index].content = content;
    //             // Set the updated messages array as the new state
    //             setMessages(updatedMessages);
    //         })
    //         .catch(error => {
    //             console.log('Edit Error:', error);
    //         });
    // }
    
    const handleDelete = (id) => {
        deleteMessage({ auth, messageId: id })
            .then(response => {
                //removes mdeleted message from messages
                setMessages(messages.filter(message => message.id != id));
            })
            .catch(error => {
                console.log('Delete Error!!!!: ', error)
            })
    }
 
 
    return (
        <div className="message-list-container">
            <h2 style={{ color: 'teal', textAlign: 'center' }}>Message Board</h2>
                {/* <CreateMessage addMessage={addMessage} /> */}
            
            <div className='messageList'>
                {messages.slice().reverse().map((message) => (
                    <div key={message.id} className="message-bubble">
                        <strong>{message.user}:</strong> {message.content} 
                        <br /> 
                        <small>{message.created_at}</small> 
                        <br />
                        {/* {message.user === auth.user ? (
                            <> */}
                        <button onClick={() =>handleEdit(message.id, message.content)}>Typo?</button>
                        <br />
                        <button onClick={() => handleDelete(message.id)}>or Delete? </button>
                        {/* </>
                        ) : null}  */}
                        {/* conditional statement, where it compares if the user logged in, is the user who sent the message.  */}
                        {/* ternary operator, if it is true, then they can edit or delete. if not then no beuno */}
                    </div>
                    
            ))}
            </div>
            <div className="create-message-container">
                <CreateMessage addMessage={addMessage} />
                <UploadImage />
                {/* <Images /> */}
            </div>
        </div>
    );
    
}

export default MessageList;