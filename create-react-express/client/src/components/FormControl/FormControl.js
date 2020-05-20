import React from 'react'
import './styles.css';

const FormControl = (props) => {
    return (
        <div className={`control ${props.controlClass ? props.controlClass : ""}`}>
            {props.children}
        </div>
    )
}

export default FormControl;