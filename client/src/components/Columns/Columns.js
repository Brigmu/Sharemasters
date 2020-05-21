import React from 'react'
import './styles.css';

const Columns = (props) => {
    return (
        <div className={`columns ${props.size ? props.size : ''}`} ref={props.reference} id={props.id}{...props}/>
    )
}

export default Columns;