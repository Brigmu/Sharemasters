import React, { useContext } from 'react';
import './styles.css';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import LogoutButton from "../LogoutButton/LogoutButton";

const Nav = (props) => {
    const [state, dispatch] = useStoreContext();


    return (
        <div className="section navbar is-primary">
            <div className="navbar-start">
                <div className="navbar-item">
                    Logo Image
                </div>
            </div>
            {props.children}
            <div className="navbar-end">
                <div className="navbar-item">
                    {state.user ? state.user.username : ""}
                </div>
                <div className="navbar-item">
                    {state.user ? <LogoutButton /> : ""}
                </div>
                <div className="navbar-item">
                    Home
                </div>
                <div className="navbar-item">
                    Profile
                </div>
                <div className="navbar-item">
                    <div className="burger">
                        Burger
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;