import React, { useContext } from 'react';
import './styles.css';
import { Navbar } from "react-bulma-components";
import UserContext from '../../utils/UserContext/UserContext';

const Nav = () => {
    const { username } = useContext(UserContext);
    return (
        <Navbar 
            color="primary"
            fixed="top"
        >
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Container>
                    <Navbar.Item href="#">
                        Home
                    </Navbar.Item>
                    <Navbar.Item dropdown hoverable href="#">
                    <Navbar.Link arrowless={false}>
                        Profile
                    </Navbar.Link>
                    <Navbar.Dropdown>
                        <Navbar.Item href="#">
                            Your Rentals
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            Your Listings
                        </Navbar.Item>
                    </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item href="#">
                        At the end
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}

export default Nav;