import React from 'react'
// import './styles.css';

const ItemCard = (props) => {
    return (
        <div 
            // className='item-card'
            className="notification" 
            key={props.id} 
            onClick = {props.handleItemClick}>
            <h4 className="title is-size-5">{props.itemName}</h4>
            <img 
                alt='' 
                // className='card-item-img'
                className="image" 
                src={props.img}
            >
            </img>
        </div>

    );
}

export default ItemCard;