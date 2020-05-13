import React, { useState, useEffect } from 'react';
import './styles.css';
import UserContext from '../../utils/UserContext/UserContext';
import {getUserData} from '../../utils/API/API';
import Hero from '../../components/Hero';
import Notification from "../../components/Notification";
import Container from '../../components/Container';
import Section from '../../components/Section';
import ColumnContainer from "../../components/ColumnContainer";
import Column from "../../components/Column";

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
        </div>
    )
}

export default Home;