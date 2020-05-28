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
    
    return (
        <section className="hero is-primary is-small">
            {/* <!-- Hero head: will stick at the top --> */}
            <div className="hero-head"> 
                <Nav />
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