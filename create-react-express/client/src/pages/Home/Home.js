import React, { useState, useEffect } from 'react';
import './styles.css';

//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER, CLEAR_USER } from "../../utils/UserContext/UserActions";
import {getCurrentUser, getProfile} from '../../utils/API/API';

//pages
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
    const [state, dispatch] = useStoreContext();

    const setUserState = (user) => {
        dispatch({
            type: SET_USER,
            user: user
        });
    };
    
    useEffect(()=>{
        if (!state.user) {
            getCurrentUser().then(res => {
                if (res.data.user) {
                    console.log(res.data.user);
                    getProfile(res.data.user._id)
                        .then(res => {
                            console.log(res.data[0]);
                            setUserState(res.data[0]);
                    });
                }
            });
        }
    }, [])
    
    return (
        <div className = 'homepage'>
            <Hero />
            <div>{state.user ? `Welcome, ${state.user.username}!` : "Welcome!"}</div>
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
        </div>
    )
}

export default Home;