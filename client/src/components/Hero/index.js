import React from "react";
import SearchBar from "../SearchBar";
import { useStoreContext } from "../../utils/UserContext/UserContext";
import LogoutButton from "../LogoutButton/LogoutButton";
import SignUpButton from '../SignUpButton';
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom"; 

function Hero(props) {
    const [state, dispatch] = useStoreContext();
    const location = useLocation();

    return (
        <section className="hero is-primary is-small is-mobile">
            {/* <!-- Hero head: will stick at the top --> */}
            <div className="hero-head"> 
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                        <NavLink to="/"className="navbar-item">
                            {/* <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" /> */}
                        </NavLink>
                        {/* need to figure out how to get navbar to show in mobile */}
                        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <NavLink to="/"className="navbar-item">
                                    Home
                                </NavLink>
                                <NavLink to="/listings"className="navbar-item">
                                    Browse
                                </NavLink>
                                <NavLink to="/profile"className="navbar-item" disabled>
                                    Profile
                                {/* <NavLink to="/profile" activeClassName="is-active">Profile</NavLink> */}
                                </NavLink>
                                <span className="navbar-item">
                                    {state.user ? <LogoutButton /> : <SignUpButton />}
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
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
                <SearchBar />
            </div>
        </section>
    );
}

export default Hero;