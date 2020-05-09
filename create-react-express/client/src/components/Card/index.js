import React from "react";

function Card(props) {
    return (
        <div className={"box"} key={props.id}>
            <figure className="image is-128x128">
                <img src={props.img}></img>
            </figure>
            <h1>{props.itemName}</h1>
        </div>
    )
}

export default Card;