import React, { useContext } from 'react';
import './styles.css';
import UserContext from '../../utils/UserContext/UserContext';

const Nav = (props) => {
    const {username} = useContext(UserContext);
    return (
        <nav className="navbar is-primary" role="navigation" >
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <p className="navbar-item">Welcome {username}</p>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;