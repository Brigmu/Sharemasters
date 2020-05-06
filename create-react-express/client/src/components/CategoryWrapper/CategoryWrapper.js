import React from 'react'
import './styles.css';
import CardContainer from '../CardContainer/CardContainer';

const CategoryWrapper = (props) => {
    return (
        <div className = 'category-wrapper'>
            <h2>{props.category}</h2>
            <button className='scroll-btn' id='scroll-left-btn' data-category={props.category} onClick={props.handleBtns}>Left</button>
            <CardContainer reference={props.reference} handleSwipe={props.handleSwipe}/>
            <button className='scroll-btn' id='scroll-right-btn' data-category={props.category} onClick={props.handleBtns}>Right</button>
        </div>
    )
}

export default CategoryWrapper;