import React from 'react'
import './styles.css'

const ItemImage = (props) => {
    return(
        <div className='item-img-div'>
            {props.img ? <img className='item-img' src='' alt='item'></img>:<div className='placeholder-div'><h1>Upload an image</h1></div>}
        </div>
    )
}

export default ItemImage;