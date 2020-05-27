import React, { useState, useEffect } from 'react';
import './styles.css';

//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER } from "../../utils/UserContext/UserActions";
import {getCurrentUser, getProfile} from '../../utils/API/API';

//pages
import Hero from '../../components/Hero';
import { Section, Container, Tile, Heading, Columns } from "react-bulma-components";
import { Link } from 'react-router-dom';


const Home = () => {
    // initialize user state -- checks if there is a user logged in 
    const [state, dispatch] = useStoreContext();
    const options = [
        {
            message: "Post a Listing",
            color: "is-primary is-light is-outlined",
            link:"newlisting"
        },
        {
            message:"Browse Listings",
            color: "is-primary",
            link: "listings"
        },
        {
            message: "View Your Profile",
            color: "is-primary is-light is-outlined",
            link: "profile"
        }
    ];
    
    // grab user data from profile?
    const setUserState = (user) => {
        dispatch({
            type: SET_USER,
            user: user
        });
        console.log(user);
    };
    
    useEffect(()=>{
        if (!state.user) {
            getCurrentUser().then(res => {
                if (res.data.user) {
                    getProfile(res.data.user._id)
                        .then(res => {
                            setUserState(res.data[0]);
                    });
                }
            });
        }
    }, []);
    
    return (
        <div>
            <Hero />
            <Section>
                <Tile
                    kind="ancestor"
                >
                    <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification>
                        <Heading className="has-text-centered">{state.user ? `Welcome, ${state.user.username}!` : "Welcome!"}</Heading>
                        </Tile>
                    </Tile>
                </Tile>
            </Section>
            <Section>
                <Container>
                    <Columns>
                        {options.map(option =>  
                            <Columns.Column>
                                <Link to={"/" + option.link} activeClassName="is-active">
                                    <div key={option.link} className={"notification has-text-centered " + option.color}>
                                    {option.message}
                                    </div>    
                                </Link> 
                            </Columns.Column>
                        )}
                    </Columns>
                </Container>
            </Section>
        </div>
    );
}

export default Home;