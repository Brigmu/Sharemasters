import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import LogoutButton from "../LogoutButton/LogoutButton";
import SignUpButton from '../SignUpButton';

const Nav = (props) => {
    const [state, dispatch] = useStoreContext();

    return (
        <div className="section navbar is-primary">
            <div className="navbar-start">
                <div className="navbar-item">
                    Logo Image
                </div>
            </div>
            {props.children}
            <div className="navbar-end">
                <div className="navbar-item">
                    {state.user ? state.user.username : ""}
                </div>
                {props.currentPage !== 'signup' ?
                <div className="navbar-item">
                    {state.user ? <LogoutButton /> : <SignUpButton />}
                </div>
                : <> </>}
                <div className="navbar-item">
                    <Link to="/" activeclassname="is-active">Home</Link>
                </div>
                {props.currentPage !== 'browse' ? 
                <div className="navbar-item">
                    <Link to="/listings" activeclassname="is-active">Browse</Link>
                </div>
                : <> </>}
                {props.currentPage !== 'post' ? 
                <div className="navbar-item">
                    <Link to="/newlisting" activeclassname="is-active">Post</Link>
                </div>
                : <> </>}
                {props.currentPage !== 'profile' ? 
                <div className="navbar-item">
                    <Link to="/profile" activeclassname="is-active">Profile</Link>
                </div>
                : <> </>}
                {/* fix burger menu for mobile */}
                <div className="navbar-item">
                    <div className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;