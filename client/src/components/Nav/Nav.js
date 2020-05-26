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
                <div className="navbar-item is-hidden-mobile">
                    { state.user ? state.user.username : ""} 
                </div>
                <div className="navbar-item is-hidden-mobile">
                    <img src={state.user ? state.user.icon : ""} />
                </div>
                <div className="navbar-item">
                    {state.user ? <LogoutButton /> : location.pathname !== "/signup" ? <SignUpButton /> : <div></div> }
                </div>
                <div className="navbar-item">
                    <NavLink to="/" activeClassName="is-active">Home</NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to="/profile" activeClassName="is-active">Profile</NavLink>
                </div>
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