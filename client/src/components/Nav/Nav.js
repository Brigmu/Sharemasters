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
        isClicked: true,
        mobileColor: ""
    });

    let location = useLocation();

    const handleBurgerToggle = () => {
        if (toggle.isClicked) {
            setToggle({isClicked: false, currentClassName: "is-active", mobileColor: " is-primary is-light"});
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
                <Navbar.Burger className={toggle.currentClassName} onClick={handleBurgerToggle} />
            </Navbar.Brand>
            {/* menu collapses into burger on mobile */}
            { location.pathname === "/signup" ? 
            <Navbar.Menu className={`${toggle.currentClassName} is-right`} color={toggle.mobileColor}>
                <Navbar.Container position="end">
                    <Navbar.Dropdown className="is-right">
                        <NavLink to="/" className="navbar-item">Home</NavLink>
                        <NavLink to="/listings" className="navbar-item" activeClassName="is-active">Browse Listings</NavLink>
                    </Navbar.Dropdown>
                </Navbar.Container>
            </Navbar.Menu> :
            <Navbar.Menu className={`${toggle.currentClassName} is-right`} color={toggle.mobileColor}>
                <Navbar.Container position="end">
                {/* if user is logged in, display this */}
                {state.user ? 
                    <Navbar.Item dropdown hoverable>
                        <Navbar.Item className="user">
                            { state.user ? <p>{state.user.username}</p> : ""}
                            <img style={ { marginLeft: "10px"} } src={state.user ? state.user.icon : ""} />
                        </Navbar.Item>
                        <Navbar.Dropdown className="is-right">
                            <NavLink className="navbar-item" to="/profile">Profile</NavLink> 
                        {location.pathname !== "/newlisting" ?
                            <NavLink to="/newlisting" className="navbar-item" activeClassName="is-active">Post a Listing</NavLink>    
                            : ""}
                        {location.pathname !== "/listings" ?
                            <NavLink to="/listings" className="navbar-item" activeClassName="is-active">Browse Listings</NavLink>    
                            : ""}
                        <Navbar.Item>
                            <LogoutButton />        
                        </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                :
                <Navbar.Item> 
                    <p>
                        {!toggle.isClicked ? <NavLink to="/signup" className="navbar-item" activeClassName="is-active">Signup</NavLink>:
                    <SignUpButton />}
                    </p>
                </Navbar.Item>}
                </Navbar.Container>
            </Navbar.Menu>}
        </Navbar>      
    );
}

export default Nav;