import React from 'react'
import './styles.css';

const Field = (props) => {
    return (
        <div className = 'field'>
            <label className="label">{props.title}</label>
                <div className="control">
                    <input className="input" type="text" placeholder={props.placeholder} ref={props.reference}/>
            </div>
        </div>
    )
}

export default Field