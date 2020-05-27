import React from 'react';
import { NavLink } from "react-router-dom";
import './styles.css';
import { useLocation } from "react-router-dom";
import { useStoreContext } from "../../utils/UserContext/UserContext";
import LogoutButton from "../LogoutButton/LogoutButton";
import SignUpButton from '../SignUpButton';

const Nav = (props) => {
    const [state, dispatch] = useStoreContext();
    const location = useLocation();

    return (
        <div className="section navbar is-primary">
            <div className="navbar-start">
                <div className="navbar-item">
                    Logo Image
                </div>

            </div>
            <div className="navbar-item">
                {props.children}
            </div>
            <div className="navbar-end">
                <NavLink className="navbar-item" to="/profile">{ state.user ? state.user.username : ""}<img style={ { marginLeft: "10px"} } src={state.user ? state.user.icon : ""} /></NavLink> 
                <div className="navbar-item">
                    {state.user ? <LogoutButton /> : location.pathname !== "/signup" ? <SignUpButton /> : <div></div> }
                </div>
                <NavLink to="/" className="navbar-item">Home</NavLink>
                {/* fix burger menu for mobile */}
                <div className="navbar-item">
                    <div className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;