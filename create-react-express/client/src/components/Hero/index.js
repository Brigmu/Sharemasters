import React from "react";
import SearchBar from "../SearchBar";

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
                                <a class="navbar-item is-active">
                                Home
                                </a>
                                <a class="navbar-item">
                                Browse
                                </a>
                                <a class="navbar-item">
                                Profile
                                </a>
                                <span class="navbar-item">
                                <a class="button is-primary is-inverted">
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