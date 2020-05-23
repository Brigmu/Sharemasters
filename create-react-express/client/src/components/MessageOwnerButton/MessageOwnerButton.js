import React from 'react';
import './styles.css'

function MessageOwnerButton() {

    const handleMessage = (e) => {
        console.log('navigate user to email form or chat window');
    }

    return (
        <button className="button is-primary is-light is-outlined message-owner" onClick={handleMessage}>
            Message the Owner
        </button>
    )
}

export default MessageOwnerButton;