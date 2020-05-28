import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './styles.css';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import {Navbar} from 'react-bulma-components';
import LogoutButton from "../LogoutButton/LogoutButton";
import SignUpButton from '../SignUpButton';
import { set } from 'mongoose';

const Nav = (props) => {
    const [state, dispatch] = useStoreContext();
    const [toggle, setToggle] = useState({
        currentClassName: "",
        isClicked: true
    });

    let location = useLocation();

    const handleBurgerToggle = () => {
        if (toggle.isClicked) {
            setToggle({isClicked: false, currentClassName: "is-active"});
        } else {
            setToggle({currentClassName: "", isClicked: true});
        }
        console.log(toggle);
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
                <Navbar.Burger onClick={handleBurgerToggle}/>
            </Navbar.Brand>
            {/* menu collapses into burger on mobile */}
            <Navbar.Menu className={toggle.currentClassName}>
                <Navbar.Container>
                </Navbar.Container>
                <Navbar.Container position="end">
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
                            <div className="dropdown-item">
                                <NavLink activeClassName="is-active" to="/profile">Profile</NavLink> 
                            </div>
                            <div className="dropdown-item">
                                <LogoutButton />
                            </div>
                            </div>
                        </div>
                    </div>
                : ""}
                {state.user || location.pathname === "/signup" ? "" :
                <Navbar.Item> 
                    <SignUpButton />
                </Navbar.Item>}
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>      
    );
}

export default Nav;