import React from 'react';

function ItemPageImage({ imageURL, itemName }) {
    return (
        <img className="itempageimage" src={`${imageURL}`} alt={`${itemName}`} />
    )
}

export default ItemPageImage