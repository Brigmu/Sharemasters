import React, { useRef } from "react";
import SearchBar from "../SearchBar";
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { Link, useHistory } from "react-router-dom"; 
import LogoutButton from "../LogoutButton/LogoutButton";

function Hero(props) {
    const [state, dispatch] = useStoreContext();

    const searchTermRef = useRef();
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchTermRef.current.value);
        localStorage.setItem('searchTerm', searchTermRef.current.value);
        history.push('/listings');
    }
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
                                <Link to={'/'}><div className = 'navbar-item'>Home</div></Link>
                                <Link to={'/listings'}><div className = 'navbar-item'>Browse</div></Link>
                                <Link to={'/profile'}><div className = 'navbar-item'>Profile</div></Link>
                                <Link to={'/newlisting'}><div className = 'navbar-item'>Post</div></Link>
                                {/* <a href="/" className="navbar-item">
                                    Home
                                </a>
                                <a href="/listings" className="navbar-item">
                                    Browse
                                </a>
                                <a href="/profile" className="navbar-item">
                                    Profile
                                </a> */}
                                <span className="navbar-item">{state.user ? <LogoutButton></LogoutButton> :
                                <a href="/signup" className="button is-primary is-inverted">
                                    <span>Log In</span>
                                </a>}
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
                <SearchBar reference={searchTermRef} handleSearch={handleSearch}/>
            </div>
        </section>
    );
}

export default Hero;