import React, { useRef } from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import { Navbar } from "react-bulma-components";

import { useStoreContext } from "../../utils/UserContext/UserContext";
import { useLocation } from "react-router-dom";
import { NavLink, useHistory } from "react-router-dom";
import SignUpButton from "../SignUpButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import Nav from "../Nav/Nav";

function Hero(props) {

    const [state, dispatch] = useStoreContext();
    const location = useLocation();

    const searchTermRef = useRef();
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchTermRef.current.value);
        localStorage.setItem('searchTerm', searchTermRef.current.value);
        history.push('/listings');
    }


    const renderLogoutButton = () => {
        if (!state.user) {
            return (
                <Navbar.Item dropdown hoverable href="/profile">
                    <Navbar.Link arrowless={true} className="profile">
                        Profile
                    </Navbar.Link>
                    <Navbar.Dropdown>
                        <Navbar.Item>
                            <LogoutButton />
                        </Navbar.Item>
                    </Navbar.Dropdown>
                </Navbar.Item>
            );
        } 
    }
    
    return (
        <section className="hero is-primary is-small is-mobile">
            {/* <!-- Hero head: will stick at the top --> */}
            <div className="hero-head"> 
                <Nav />
                {/* <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                        <NavLink to="/"className="navbar-item"> */}
                            {/* <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" /> */}
                        {/* </NavLink> */}
                        {/* need to figure out how to get navbar to show in mobile */}
                        {/* <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end"> */}
                                {/* <NavLink to="/listings" className="navbar-item" activeClassName="is-active">Browse</NavLink>
                                {/* <NavLink to="/profile" className="navbar-item" activeClassName="is-active">Profile</NavLink> */}
                                {/* {state.user ? renderLogoutButton : <Navbar.Item><SignUpButton /></Navbar.Item>} */}
                                {/* <NavLink to="/"className="navbar-item">
                                    Home
                                </NavLink>
                                <NavLink to="/listings"className="navbar-item">
                                    Browse
                                </NavLink>
                                <NavLink to="/profile"className="navbar-item" disabled>
                                    Profile */}
                                {/* <NavLink to="/profile" activeClassName="is-active">Profile</NavLink> */}
                                {/* </NavLink>
                                <span className="navbar-item">
                                    {state.user ? <LogoutButton /> : <SignUpButton />}
                                </span>
                            </div>
                        </div>
                    </div>
                </nav> */}
            </div>

            {/* <!-- Hero content: will be in the middle --> */}
            <div className="hero-body">
                <div className="container has-text-centered">
                <h1 className="title">
                    Shareish!
                </h1>
                <h2 className="subtitle">
                    share what you cherish
                </h2>
                </div>
                <br></br>
                <SearchBar reference={searchTermRef} handleSearch={handleSearch}/>
            </div>
        </section>
    );
}

export default Hero;