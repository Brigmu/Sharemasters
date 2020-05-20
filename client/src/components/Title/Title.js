import React from 'react'
import './styles.css';

const Title = (props) => {
    return (
        <div className={`title level notification ${props.colorClass}`}>
            <span className='link-offset' id={props.id}></span>
            <p className="title">
                {props.title}
            </p>
            <button className="button scroll-btn scroll-left" data-direction='left' data-category={props.title} onClick={props.handleScrollClick}>
                <span className="icon is-small" data-direction='left' data-category={props.title} onClick={props.handleScrollClick}>
                    <i className="fas fa-angle-left" data-direction='left' data-category={props.title} onClick={props.handleScrollClick}></i>
                </span>
            </button>
            <button className="button scroll-btn scroll-right" data-direction='right' data-category={props.title} onClick={props.handleScrollClick}>
                <span className="icon is-small" data-direction='right' data-category={props.title} onClick={props.handleScrollClick}>
                    <i className="fas fa-angle-right" data-direction='right' data-category={props.title} onClick={props.handleScrollClick}></i>
                </span>
            </button>
        </div>
    )
}

export default Title;