import React from 'react'
import './styles.css';
import CardContainer from '../CardContainer/CardContainer';

const CategoryWrapper = (props) => {
    return (
        <div className = 'category-wrapper'>
            <h2>{props.category}</h2>
            <button className='scroll-btn' id='scroll-left-btn' onClick={props.handleBtns}>Left</button>
            <CardContainer yardRef={props.yardRef}/>
            <button className='scroll-btn' id='scroll-right-btn' onClick={props.handleBtns}>Right</button>
        </div>
    )
}

export default CategoryWrapper;