import React from "react";
import './styles.css';

function Card(props) {
    return (
        <div className={"box"} key={props.id}>
            <figure className="image is-156x156">
                <img src={props.img} alt =''></img>
            </figure>
            <h2>{props.itemName}</h2>
            <h2>${props.price}/day</h2>
        </div>
    )
}

export default Card;