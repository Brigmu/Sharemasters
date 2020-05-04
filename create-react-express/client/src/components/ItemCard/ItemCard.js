import React from 'react'
import './styles.css';

const ItemCard = (props) => {
    return (
        <div className='item-card' key={props.id}>
            <h4>{props.itemName}</h4>
            <img alt='' className='card-item-img' src={props.img}></img>
        </div>
    )
}

export default ItemCard;