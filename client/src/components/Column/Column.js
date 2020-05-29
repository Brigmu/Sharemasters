import React from 'react'
import './styles.css';

const Column = (props) => {
    return (
        <div className = {`column ${props.size ? props.size: '' }`} {...props}>
            {props.children}
        </div>
    )
}

export default Column;