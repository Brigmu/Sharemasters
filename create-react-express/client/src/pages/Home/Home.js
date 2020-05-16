import React, { useState, useEffect } from 'react';
import './styles.css';

//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER, CLEAR_USER } from "../../utils/UserContext/UserActions";
import {getCurrentUser, getProfile} from '../../utils/API/API';

//pages
import Hero from '../../components/Hero';
import Notification from "../../components/Notification";
import Container from '../../components/Container';
import Section from '../../components/Section';
import ColumnContainer from "../../components/ColumnContainer";
import Column from "../../components/Column";
import {TileContainer, TileLevel} from 'react-bulma-components';

const options = [
    {
        message:"Browse Listings",
        color: "is-primary is-light"
    },
    {
        message: "Post a Listing",
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
            {/* <UserContext.Provider value={userInfo}>
                <Hero />
                <Section>
                    <Container>
                        <ColumnContainer>
                            {options.map(option => 
                                <Column>
                                    <Notification
                                        color={option.color}
                                    >
                                    {option.message}
                                    </Notification>
                                </Column>    
                            )}
                        </ColumnContainer>
                    </Container>
                </Section>
            </UserContext.Provider>
            <Hero /> */}
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