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
    // state information
    const [allitems, setallitems] = useState([])
    const [requests, setRequests] = useState([]);
    const [rentals, setRentals] = useState([]);
    const [returns, setReturns] = useState([]);
    const [state, dipatch] = useStoreContext();

    console.log(state);
    console.log(state.user);

    const [selected, setSelected] = useState('Profile');

    const handlePageChange = (e) => {
        const nextPage = e.target.getAttribute('data-page');
        setSelected(nextPage);
    }

    const handleItemReturn = (id) => {
        //make api call to change item with id to not rented
    }

    const handleAccept = (id) => {
        //make api call to set item with id to rented and pending to false
    }

    const handleReject = (id) => {
        //make api call to set pending to false. handle rejection message?
    }

    const setAll = () => {
        getProfile(state.user.userId)
            .then(res => {
                //set state res.data.rented
                //set stete res.data.owned
            })
            .catch(err => {console.log(err.response)})
    }

    useEffect(() => {
        // setAll()
    }, [])

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
                        selected === 'Rentals' ? <>{rentals.length !== 0 ? rentals.map(rental => (                
                            <ProfileItemContainer 
                                image={rental.img}
                                title={rental.itemName}
                                startDate={rental.appointment.startDate}
                                endDate={rental.appointment.endDate}>
                                <ReturnButton onClick={handleItemReturn} data-id={rental.id}>Return</ReturnButton>
                                <MessageOwnerButton></MessageOwnerButton>
                            </ProfileItemContainer>
                        )):<div>No Rentals</div>}</>
                        : selected === 'Requests' ? <>{requests.length !== 0 ? requests.map(request => (                
                            <ProfileItemContainer 
                                image={request.img}
                                title={request.itemName}
                                startDate={request.appointment.startDate}
                                endDate={request.appointment.endDate}>
                                <SuccessButton onClick={handleAccept} data-id={request.id}>Accept</SuccessButton>
                                <RejectButton onClick={handleReject} data-id={request.id}>Reject</RejectButton>
                            </ProfileItemContainer>
                        )):<div>No Requests</div>}</>
                        : selected === 'Returns' ? <>{returns.length !== 0 ? returns.map(returnItem => (                
                            <ProfileItemContainer 
                                image={returnItem.img}
                                title={returnItem.itemName}
                                startDate={returnItem.appointment.startDate}
                                endDate={returnItem.appointment.endDate}>
                                <SuccessButton onClick={handlePageChange} data-id={returnItem.id}>Confirm</SuccessButton>
                                <RejectButton onClick={handlePageChange} data-id={returnItem.id}>Report</RejectButton>
                            </ProfileItemContainer>
                        )):<div>No Returns</div>}</>
                        : <div className="box">
                        <div className="title">Username: CrowMama</div>
                        <br />
                        {/* <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="" />
                        </figure> */}
                        <br />
                        <div className="content">
                            <div className="title is-5">Name: Sugawara Kochi
                            </div>
                            <div className="title is-5">Location: Miyagi, Japan</div>
                        </div>
                        </div>}
                </Container>


            </Section>
        </div>
        
    )
}

export default Profile;