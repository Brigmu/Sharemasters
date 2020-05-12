import React from 'react'
import './styles.css';

const FormHelp = (props) => {
    return (
        <p className={`help is-${props.type}`}>{props.message}</p>
    )
}

export default FormHelp;