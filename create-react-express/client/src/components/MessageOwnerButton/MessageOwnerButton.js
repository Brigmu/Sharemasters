import React from 'react';

function MessageOwnerButton() {

    const handleMessage = (e) => {
        console.log('navigate user to email form or chat window');
    }

    return (
        <button className="button is-primary is-light is-outlined" onClick={handleMessage}>
            Message the Owner
        </button>
    )
}

export default MessageOwnerButton;