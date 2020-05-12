import React, { useContext } from 'react';
import './styles.css';
// import { Navbar } from "react-bulma-components";
import UserContext from '../../utils/UserContext/UserContext';
// import { PromiseProvider } from 'mongoose';

const Nav = (props) => {
    const { username } = useContext(UserContext);
    return (
        <div className="section navbar is-primary">
            <div className="navbar-start">
                <div className="navbar-item">
                    Logo Image
                </div>
                
            </div>
            {props.children}
            <div className="navbar-end">
                <div class="navbar-item">
                    Home
                </div>
                <div className="navbar-item">
                    Profile
                </div>
                <div className="navbar-item">
                    <div className="burger">
                        Burger
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;