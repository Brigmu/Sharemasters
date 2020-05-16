import React from 'react'
import './styles.css';

const Field = (props) => {
    return (
        <div className = 'field'>
            <label class="label">{props.title}</label>
                <div class="control">
                    <input class="input" type="text" placeholder={props.placeholder} ref={props.reference}/>
            </div>
        </div>
    )
}

export default Field