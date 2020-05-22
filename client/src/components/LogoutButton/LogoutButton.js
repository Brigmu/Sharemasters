import React from 'react'
import './styles.css';
import { logoutUser } from '../../utils/API/API';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { CLEAR_USER } from "../../utils/UserContext/UserActions";

const LogoutButton = (props) => {
    const [state, dispatch] = useStoreContext();

    const clearUserState = () => {
        dispatch({
            type: CLEAR_USER
        });
    };
    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser()
            .then(res => {
                clearUserState();
                alert(res.data.message);
            })
    }

    return (
        <button onClick={handleLogout} className="button is-danger is-small">Logout</button>
    )
}

export default LogoutButton;