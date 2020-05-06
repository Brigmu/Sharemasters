import React from 'react'
// import {Link} from "react-router-dom";
import './styles.css';

const UserForm = (props) => {
    return (
        <form className = 'user-from'>
            <h1>{props.title}</h1>
            <div className='form-div'>
                <label>Username:</label>
                <input className='user-login-input' type='text' placeholder='Enter Username' ref={props.userRef}></input>
                <label>Password:</label>
                <input className='user-login-input' type='password' placeholder='Enter password' ref={props.pwRef}></input>
                <button type='submit' onClick={props.handleSubmit}>Submit</button>
                <p>{props.paragraphText}</p>
                <a href={props.href}>{props.anchorText}</a>
                {/* <p><Link to={props.ref}>
                    {props.anchorText}
                </Link>
                </p> */}
            </div>
        </form>
    )
}

export default UserForm;