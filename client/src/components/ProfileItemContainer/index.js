import React from "react";

import { Notification } from 'react-bulma-components';

const ProfileItemContainer = (props) => {
    return (
        <Notification className="level">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-128x128">
                        <img src={props.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <div className="title is-5">Item Name: {props.title}</div>
                        {props.startDate ? <div className="title is-5">Start Date: <span>{props.startDate}</span></div> : <></>}
                        {props.endDate ?<div className="title is-5">End Date: <span>{props.endDate}</span></div> : <></>}
                        {props.description ? <div className="title is-5">Description: <span>{props.description}</span> </div>: <></>}
                        {props.price ? <div className="title is-5">Price: <span>${props.price}/day</span> </div>: <></>}
                        {props.rented ? <div className="title is-5">Rental Status: <span>{props.rented.itemStatus ? 'Rented' : 'Available'}</span> </div>: <></>}
                        {props.history ? <div className="title is-5">Number of times rented: <span>{props.history.length}</span> </div>: <></>}
                    </div>
                </div>
            </article>
            <div className="field is-grouped">
                {props.children}
            </div>
        </Notification>
    );
};

export default ProfileItemContainer;