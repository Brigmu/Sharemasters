import React from "react";
import './styles.css';

function Card(props) {
    return (
        <div className={"box item has-text-centered"} key={props._id} data-id={props.itemId} onClick={props.handleItemClick}>
                <figure class="item-figure center" data-id={props.itemId} onClick={props.handleItemClick}>
                    <img className="item-image" data-id={props.itemId} src={props.img} alt ='' onClick={props.handleItemClick}></img>
                </figure>
            <div className="is-mobile">
                <h2 className="mobile-font" data-id={props.itemId} onClick={props.handleItemClick}>{props.itemName}</h2>
                <h2 className="mobile-font" data-id={props.itemId} onClick={props.handleItemClick}>${props.price}/day</h2>
            </div>
            
        </div>
    )
}

export default Card;