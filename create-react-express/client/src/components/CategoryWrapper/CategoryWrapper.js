import React from 'react'
import './styles.css';
import CardContainer from '../CardContainer/CardContainer';
import CategoryLevel from "../CategoryLevel";

const CategoryWrapper = (props) => {
    return (
        <div className = 'category-wrapper'>
            <CategoryLevel
                color={props.color}
            >
                <p className="title">{props.category}</p>
            </CategoryLevel>
            <button className='scroll-btn' id='scroll-left-btn' data-category={props.category} onClick={props.handleBtns}>Left</button>
            <CardContainer reference={props.reference} handleSwipe={props.handleSwipe} handleItemClick={props.handleItemClick}/>
            <button className='scroll-btn' id='scroll-right-btn' data-category={props.category} onClick={props.handleBtns}>Right</button>
        </div>
    )
}

export default CategoryWrapper;