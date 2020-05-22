import React from "react";
import './styles.css';

function Card(props) {
    return (
        <div onClick={props.handleItemClick} className={"box"} key={props.id} data-id={props.itemId}>
            <figure className="image is-156x156">
                <img data-id={props.itemId}src={props.img} alt =''></img>
            </figure>
            <h2 data-id={props.itemId}>{props.itemName}</h2>
            <h2 data-id={props.itemId}>${props.price}/day</h2>
        </div>
    )
}

export default Card;