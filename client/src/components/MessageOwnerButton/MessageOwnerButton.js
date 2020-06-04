import React, { useState, useEffect }from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
import { getItem, initMessage } from '../../utils/API/API';
import { useStoreContext } from '../../utils/UserContext/UserContext';

function MessageOwnerButton() {
    const { id } = useParams();
    const [state, dispatch] = useStoreContext();
    const [item, setItem] = useState({})
    const [owner, setOwner] = useState({})
    const [ownerEmail, setOwnerEmail] = useState("")

        useEffect(() => {
        getItem(id)
        .then(res => {
            console.log(res)
            res = res.data[0]
            setOwnerEmail('mailto:'+res.ownerId.email)
        })
    }, []);


    return (
        <div>
            <a href={ownerEmail} target="_blank">
                <button className="button is-primary is-light is-outlined message-owner">
                    Message the Owner
                </button>
            </a>
        </div>
    )
}

export default MessageOwnerButton;