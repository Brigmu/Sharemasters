import React, { useState, useEffect } from 'react';
import './styles.css';
import UserContext from '../../utils/UserContext/UserContext';
import {getUserData} from '../../utils/API/API';
import Hero from '../../components/Hero';
import TileContainer from '../../components/TileContainer';
import TileLevel from '../../components/TileLevel';
import Notification from "../../components/Notification";
import Container from '../../components/Container';

const options = [
    {
        message:"Browse Listings",
        color: "is-primary is-light"
    },
    {
        message: "Post a Listings",
        color: "is-primary"
    },
    {
        message: "Manage Your Rentals",
        color: ""
    }
];

const Home = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        id: ''
    });
    
    useEffect(()=>{
        getUserData(1, (results) => {
            console.log(results);
            setUserInfo(results);
        })
    }, [])
    
    return (
        <div className = 'homepage'>
            <UserContext.Provider value={userInfo}>
                <Hero />
                <Container>
                    <TileContainer>
                        {options.map(option => 
                            <TileLevel>
                                <Notification
                                    color={option.color}
                                >
                                    {option.message}
                                </Notification>
                            </TileLevel>
                        )}
                    </TileContainer>
                </Container>
            </UserContext.Provider>
        </div>
    )
}

export default Home;