import React from "react";
import './styles.css';

function Card(props) {
    return (
        <div className={"box"} key={props._id} data-id={props.itemId} onClick={props.handleItemClick}>
            {/* <figure className="image is-156x156"> */}
            <figure className="image is-128x128">
                <img className="center" data-id={props.itemId}src={props.img} alt =''></img>
            </figure>
            <h2 data-id={props.itemId}>{props.itemName}</h2>
            <h2 data-id={props.itemId}>${props.price}/day</h2>
        </div>
    )
}

export default Card;