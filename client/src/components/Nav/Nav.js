import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import './styles.css';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import LogoutButton from "../LogoutButton/LogoutButton";
import SignUpButton from '../SignUpButton';
import { Navbar } from "react-bulma-components";

const Nav = (props) => {
    const [state, dispatch] = useStoreContext();


    return (
        <Navbar
            color = "primary"
        >
            <Navbar.Brand>
                <Navbar.Item>
                    <h1>SHAREISH</h1>
                </Navbar.Item>
                <Navbar.Burger/>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item>
                        {state.user ? state.user.username : ""}
                    </Navbar.Item>
                    <Navbar.Item>
                        {props.signup ? "" : <NavLink to="/newlisting" activeClassName="is-active">Post a Listing</NavLink>}
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item>
                        <NavLink to="/" activeClassName="is-active">Home</NavLink>
                    </Navbar.Item>
                    <Navbar.Item>
                        <NavLink to="/profile" activeClassName="is-active">Profile</NavLink>
                    </Navbar.Item>

                    {props.signup ? "" : 
                    <Navbar.Item>
                        {state.user ? <LogoutButton /> : <SignUpButton />}
                    </Navbar.Item>}

                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>      
    );
}

export default Nav;