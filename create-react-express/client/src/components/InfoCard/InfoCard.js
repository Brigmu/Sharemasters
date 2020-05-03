import React from 'react';
import RentThisButton from '../RentThisButton/RentThisButton';
import MessageOwnerButton from '../MessageOwnerButton/MessageOwnerButton';

function InfoCard({ ownerName, location}) {
    return (
        <div>
            <p>Owener: {`${ownerName}`}</p>
            <p>Location: {`${location}`}</p>
            <RentThisButton>

            </RentThisButton>
            <MessageOwnerButton />
        </div>
    )
}

export default InfoCard;