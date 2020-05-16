import React from "react";
import SearchBar from "../SearchBar";
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { NavLink } from "react-router-dom"; 

function Hero(props) {
    return (
        <section class="hero is-primary is-small is-mobile">
            {/* <!-- Hero head: will stick at the top --> */}
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                        <a class="navbar-item">
                            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                        </a>
                        {/* need to figure out how to get navbar to show in mobile */}
                        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroA" class="navbar-menu">
                            <div class="navbar-end">
                                <a href="/" class="navbar-item">
                                    Home
                                {/* <NavLink to="/" activeClassName="is-active">Home</NavLink> */}
                                </a>
                                <a href="/listings" class="navbar-item">
                                    Browse
                                {/* <NavLink to="/listings" activeClassName="is-active">Browse</NavLink> */}
                                </a>
                                <a href="/profile" class="navbar-item">
                                    Profile
                                {/* <NavLink to="/profile" activeClassName="is-active">Profile</NavLink> */}
                                </a>
                                <span class="navbar-item">
                                <a href="/signup" class="button is-primary is-inverted">
                                    <span>Log In</span>
                                </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* <!-- Hero content: will be in the middle --> */}
            <div class="hero-body">
                <div class="container has-text-centered">
                <h1 class="title">
                    Shareish!
                </h1>
                <h2 class="subtitle">
                    share what you cherish
                </h2>
                </div>
                <br></br>
                <SearchBar />
            </div>

            {/* <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs">
                <div class="container">
                    <ul>
                    <li class="is-active"><a>Overview</a></li>
                    <li><a>Modifiers</a></li>
                    <li><a>Grid</a></li>
                    <li><a>Elements</a></li>
                    <li><a>Components</a></li>
                    <li><a>Layout</a></li>
                    </ul>
                </div>
                </nav>
            </div> */}
        </section>
    );
}

export default Hero;