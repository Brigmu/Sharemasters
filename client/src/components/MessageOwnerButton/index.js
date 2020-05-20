import React from 'react';
import { Button } from "react-bulma-components";

function MessageOwnerButton(props) {
    return (
        <Button className="is-primary is-light is-outlined" {...props}>
            Message the Owner
        </Button>
    )
}

export default MessageOwnerButton;