import React from 'react'
import './styles.css';

const FormField = (props) => {
    return (
        <div className={`field ${props.fieldClass ? props.filedClass : ""}`}>
            <label className="label">{props.label ? props.label : ""}</label>
            {props.children}
        </div>
    )
}

export default FormField;