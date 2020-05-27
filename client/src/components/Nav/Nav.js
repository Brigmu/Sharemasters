import React, { useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './styles.css';

import { useStoreContext } from "../../utils/UserContext/UserContext";

import LogoutButton from "../LogoutButton/LogoutButton";
import SignUpButton from '../SignUpButton';
import { Navbar } from "react-bulma-components";

const Nav = (props) => {
    const [state, dispatch] = useStoreContext();

    let location = useLocation();


    const renderProfile = () => {
            return (
                <Navbar.Item>
                    <NavLink to="/profile" className="inactive" activeClassName="is-active">Profile</NavLink>
                </Navbar.Item>
            );
    }

    const renderSignUp = () => {
        return (
            <Navbar.Item>
                <SignUpButton />
            </Navbar.Item>
        )
    }

    return (
        <Navbar
            color = "primary"
            className="is-fixed-top"
        >
            <Navbar.Brand>
                <Navbar.Item>
                    <NavLink to="/" className="inactive" activeClassName="is-active"><h1>SHAREISH</h1></NavLink>
                </Navbar.Item>
                <Navbar.Burger/>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item>
                        {state.user ? state.user.username : "Guest"}
                    </Navbar.Item>
                    <Navbar.Item>
                        {state.user ? "" : <NavLink to="/newlisting" className="inactive" activeClassName="is-active">Post a Listing</NavLink>}
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    {state.user ? renderProfile : ""}
                    <Navbar.Item>
                        <span>{location.pathname}</span>
                    </Navbar.Item>
                    {location.pathname != "/signup" ? renderSignUp : ""}
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>      
    );
}

export default Nav;