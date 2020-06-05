import React from "react";
import "./styles.css";

import { Notification, Columns } from 'react-bulma-components';

const ProfileItemContainer = (props) => {
    return (
        <Notification>
            <Columns>
                <Columns.Column size={3}>
                    <figure className="item-page">
                        <img className="item-page" src={props.image} />
                    </figure>
                </Columns.Column>
                <Columns.Column size={6}>
                    <div className="content">
                        <div className="title is-5">Item Name: {props.title}</div>
                        {props.startDate ? <div className="title is-5">Start Date: <span>{props.startDate}</span></div> : <></>}
                        {props.endDate ?<div className="title is-5">End Date: <span>{props.endDate}</span></div> : <></>}
                        {props.description ? <div className="title is-5">Description: <span>{props.description}</span> </div>: <></>}
                        {props.price ? <div className="title is-5">Price: <span>${props.price}/day</span> </div>: <></>}
                        {props.rented ? <div className="title is-5">Rental Status: <span>{props.rented.itemStatus ? 'Rented' : 'Available'}</span> </div>: <></>}
                        {props.history ? <div className="title is-5">Number of times rented: <span>{props.history.length}</span> </div>: <></>}
                    </div>
                </Columns.Column>
                <Columns.Column size={3}>
                    <div className="field is-grouped">
                        {props.children}
                    </div>
                </Columns.Column>
            </Columns>
        </Notification>
    );
};

export default ProfileItemContainer;