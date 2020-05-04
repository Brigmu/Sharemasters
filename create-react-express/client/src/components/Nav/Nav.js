import React, { useContext } from 'react';
import './styles.css';
import UserContext from '../../utils/UserContext/UserContext';

const Nav = (props) => {
    const {username} = useContext(UserContext);
    return (
        <nav className={props.class}>
            <p>Welcome {username}</p>
            <a className='nav-login' href='/login'>Login</a>
        </nav>
    )
}

export default Nav;