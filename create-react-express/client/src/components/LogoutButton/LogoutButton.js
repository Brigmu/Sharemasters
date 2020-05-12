import React from 'react'
import './styles.css';
import {logoutUser} from '../../utils/API/API';

const LogoutButton = (props) => {
    
    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser()
            .then(res => {
                console.log(res.data.message);
                //remove userstate
            })
    }

    return (
        <button onClick={handleLogout} className="button is-danger is-small">Logout</button>
    )
}

export default LogoutButton;