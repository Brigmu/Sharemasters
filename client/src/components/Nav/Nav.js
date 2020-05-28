import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './styles.css';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import {Navbar} from 'react-bulma-components';
import LogoutButton from "../LogoutButton/LogoutButton";
import SignUpButton from '../SignUpButton';

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
                {/* don't show logo on navbar on homepage */}
                {location.pathname === "/" ? "" : 
                <Navbar.Item>
                    <NavLink to="/" className="inactive" activeClassName="is-active"><h1>SHAREISH</h1></NavLink>
                </Navbar.Item> }
                <Navbar.Burger/>
            </Navbar.Brand>
            {/* menu collapses into burger on mobile */}
            <Navbar.Menu>
                <Navbar.Container>
                {location.pathname === "/profile" ?
                    <Navbar.Item>
                        <NavLink to="/newlisting" className="button is-primary is-light">Post a Listing</NavLink>    
                    </Navbar.Item> : ""}
                {location.pathname === "/profile" ?
                    <Navbar.Item>
                        <NavLink to="/newlisting" className="button is-primary is-light">Browse Listings</NavLink>    
                    </Navbar.Item> : ""}
                </Navbar.Container>
                <Navbar.Container>
                    {props.children}
                </Navbar.Container>
                <Navbar.Container position="end">
<<<<<<< HEAD
                    <NavLink className="navbar-item" to="/profile">{ state.user ? state.user.username : ""}<img style={ { marginLeft: "10px"} } src={state.user ? state.user.icon : ""} /></NavLink> 
                    <div className="navbar-item">
                        {state.user ? <LogoutButton /> : location.pathname !== "/signup" ? <SignUpButton /> : "" }
=======
                {state.user ? 
                    <div className="navbar-item dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu4">
                            { state.user ? state.user.username : ""}
                                    <img style={ { marginLeft: "10px"} } src={state.user ? state.user.icon : ""} />
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                            {/* <div className="dropdown-item">
                                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                            </div> */}
                            <div className="dropdown-item">
                                <NavLink activeClassName="is-active" to="/profile">Profile</NavLink> 
                            </div>
                            <div className="dropdown-item">
                                <LogoutButton />
                            </div>
                            </div>
                        </div>
>>>>>>> 77475a49a08a10384e7135a842301ca18c0155d8
                    </div>
                : ""}
                {state.user || location.pathname === "/signup" ? "" :
                <Navbar.Item> 
                    <SignUpButton />
                </Navbar.Item>}
                {/* {state.user ? renderProfile : ""}
                <Navbar.Item>
                    <span>{location.pathname}</span>
                </Navbar.Item>
                {location.pathname != "/signup" ? renderSignUp : ""} */}
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>      
    );
}

export default Nav;