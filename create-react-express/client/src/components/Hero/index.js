import React from "react";
import SearchBar from "../SearchBar";
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { NavLink } from "react-router-dom"; 

function Hero(props) {
    return (
        <section className="hero is-primary is-small is-mobile">
            {/* <!-- Hero head: will stick at the top --> */}
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                        <a className="navbar-item">
                            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                        </a>
                        {/* need to figure out how to get navbar to show in mobile */}
                        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <a href="/" className="navbar-item">
                                    Home
                                {/* <NavLink to="/" activeClassName="is-active">Home</NavLink> */}
                                </a>
                                <a href="/listings" className="navbar-item">
                                    Browse
                                {/* <NavLink to="/listings" activeClassName="is-active">Browse</NavLink> */}
                                </a>
                                <a href="/profile" className="navbar-item">
                                    Profile
                                {/* <NavLink to="/profile" activeClassName="is-active">Profile</NavLink> */}
                                </a>
                                <span className="navbar-item">
                                <a href="/signup" className="button is-primary is-inverted">
                                    <span>Log In</span>
                                </a>
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