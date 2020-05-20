import React from 'react'
import './styles.css';

const FormIcon= (props) => {
    return (
        <span className={`icon is-${props.size} is-${props.side}`}>
            <i className={`fas fa-${props.icon}`}></i>
        </span>
    )
}

export default FormIcon; 