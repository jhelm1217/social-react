import React, { useState } from "react"

const CreateMessage = () => {
    const [messageContent, setMessageContent] = useState('');

    const handleMessageChange = (e) => {
        setMessageContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDeafult();
        //should send messages to backend
        setMessageContent('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={messageContent}
            onChange={handleMessageChange}
            placeholder="What's on your mind right now?"
            />
            <button type="submit">Send My Thoughts</button>
        </form>
    )
}

export default CreateMessage



