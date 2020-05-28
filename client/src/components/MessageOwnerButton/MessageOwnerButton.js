import React from 'react';
import { Button } from "react-bulma-components";
import './styles.css'

function MessageOwnerButton(props) {

    const handleMessage = (e) => {
        console.log('navigate user to email form or chat window');
    }

    return (
        // <button className="button is-primary is-light is-outlined message-owner" onClick={handleMessage}>
        //     Message the Owner
        // </button>
        <Button className="is-primary is-light is-outlined message-owner" onClick={handleMessage} {...props}>
            Message the Owner
        </Button>
    );
}

export default MessageOwnerButton;