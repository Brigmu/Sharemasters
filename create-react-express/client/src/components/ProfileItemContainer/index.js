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
                        <div className="title is-5">{props.title}</div>
                        <div className="title is-5">Start Date: <span>{props.startDate}</span></div>
                        <div className="title is-5">End Date: <span>{props.endDate}</span></div>
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