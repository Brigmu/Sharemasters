import React, { useState, useEffect, useContext } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';

//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER, CLEAR_USER } from "../../utils/UserContext/UserActions";
import { getProfile } from '../../utils/API/API';

import Nav from "../../components/Nav/Nav";
import NavTabs from "../../components/NavTabs/NavTabs";
import {Section, Container} from 'react-bulma-components';
import ProfileItemContainer from "../../components/ProfileItemContainer";

//put buttons in ProfileItemContent children
// Rental Buttons
import ReturnButton from "../../components/ReturnButton";
import MessageOwnerButton from "../../components/MessageOwnerButton";

// Listings and Return Buttons 
// Accept/Reject for Listings and Confirm/Report for Returns
import SuccessButton from "../../components/SuccessButton";
import RejectButton from "../../components/RejectButton";

const Profile = () => {
    const [state, dipatch] = useStoreContext();

    const [selected, setSelected] = useState('Profile');

    const handlePageChange = (e) => {
        const nextPage = e.target.getAttribute('data-page');
        setSelected(nextPage);
    }

    const setAll = () => {
        getProfile(state.user.userId)
            .then(res => {
                //set state res.data.rented
                //set stete res.data.owned
            })
            .catch(err => {console.log(err.response)})
    }

    return (
        <div className='profile-page'>
            <Nav />
            <br />
            <Container>
                <NavTabs handlePageChange={handlePageChange} tabs={['Profile', 'Rentals', 'Requests', 'Returns']} />
            </Container>
            <Section>
                <Container>
                    {
                        selected === 'Rentals' ? (                
                            <ProfileItemContainer 
                                image={"https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg"}
                                title={"Title"}
                                startDate={"1/1/1"}
                                endDate={"1/1/1"}>
                                <ReturnButton onClick={handlePageChange}>Return</ReturnButton>
                                <MessageOwnerButton></MessageOwnerButton>
                            </ProfileItemContainer>
                        )
                        : selected === 'Requests' ? (                
                            <ProfileItemContainer 
                                image={"https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg"}
                                title={"Title"}
                                startDate={"1/1/1"}
                                endDate={"1/1/1"}>
                                <SuccessButton onClick={handlePageChange}>Accept</SuccessButton>
                                <RejectButton onClick={handlePageChange}>Reject</RejectButton>
                            </ProfileItemContainer>
                        )
                        : selected === 'Returns' ? (                
                            <ProfileItemContainer 
                                image={"https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg"}
                                title={"Title"}
                                startDate={"1/1/1"}
                                endDate={"1/1/1"}>
                                <SuccessButton onClick={handlePageChange}>Confirm</SuccessButton>
                                <RejectButton onClick={handlePageChange}>Report</RejectButton>
                            </ProfileItemContainer>
                        )
                        : <div className='notification is-danger'><button data-page='Rentals' onClick={handlePageChange}>Next Page</button></div>}
                </Container>


            </Section>
        </div>
        
    )
}

export default Profile;