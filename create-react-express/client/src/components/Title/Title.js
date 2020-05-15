import React from 'react'
import './styles.css';

const Title = (props) => {
    return (
        <div class={`title level notification ${props.colorClass}`}>
            <span className='link-offset' id={props.id}></span>
            <p class="title">
                {props.title}
            </p>
            <button class="button scroll-btn scroll-left" data-direction='left' data-category={props.title} onClick={props.handleScrollClick}>
                <span class="icon is-small" data-direction='left' data-category={props.title} onClick={props.handleScrollClick}>
                    <i class="fas fa-angle-left" data-direction='left' data-category={props.title} onClick={props.handleScrollClick}></i>
                </span>
            </button>
            <button class="button scroll-btn scroll-right" data-direction='right' data-category={props.title} onClick={props.handleScrollClick}>
                <span class="icon is-small" data-direction='right' data-category={props.title} onClick={props.handleScrollClick}>
                    <i class="fas fa-angle-right" data-direction='right' data-category={props.title} onClick={props.handleScrollClick}></i>
                </span>
            </button>
        </div>
    )
}

export default Title;