import React from 'react'
import './styles.css';

const FormInput = (props) => {
    return (
        <input className={`input ${props.inputClass ? props.inputClass : ""}`} type={props.type} placeholder={props.placeholder} ref={props.ref}></input>
    )
}

export default FormInput;