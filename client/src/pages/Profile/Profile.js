import React, { useState, useEffect } from "react";

//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER } from "../../utils/UserContext/UserActions";
import { getProfile, addRental, removeRental } from '../../utils/API/API';

import Nav from "../../components/Nav/Nav";
import NavTabs from "../../components/NavTabs/NavTabs";
import {Section, Container} from 'react-bulma-components';
import ProfileItemContainer from "../../components/ProfileItemContainer";
import { useHistory, NavLink} from 'react-router-dom';

//put buttons in ProfileItemContent children
// Rental Buttons
import ReturnButton from "../../components/ReturnButton";
import MessageOwnerButton from "../../components/MessageOwnerButton";

// Listings and Return Buttons 
// Accept/Reject for Listings and Confirm/Report for Returns
import SuccessButton from "../../components/SuccessButton";
import RejectButton from "../../components/RejectButton";

//API functions
import {approveRental, declineRental, returnItem, confirmReturn, removeAppointment} from '../../utils/API/API';

const Profile = () => {
    // state information
    // const [allitems, setallitems] = useState([])
    const [requests, setRequests] = useState([]);
    const [rentals, setRentals] = useState([]);
    const [returns, setReturns] = useState([]);
    const [state, dispatch] = useStoreContext();
    const history = useHistory();

    const [selected, setSelected] = useState('Profile');

    const setUserState = (user) => {
        dispatch({
            type: SET_USER,
            user: user
        });
    };

    const filterRequests = (array) => {
        const filteredItems = array.filter(item => {
            return (item.pendingRequest);
        })
        setRequests(filteredItems);
    }

    const filterRentals = (array) => {
        const filteredItems = array.filter(item => {
            return (item.isRented);
        })
        setRentals(filteredItems);
    }

    const filterReturns = (array) => {
        const filteredItems = array.filter(item => {
            return (!item.active)
        })
        setReturns(filteredItems);
    }

    const handlePageChange = (e) => {
        const nextPage = e.target.getAttribute('data-page');
        setSelected(nextPage);
        switch(selected) {
            case 'Rentals':
                filterRentals(state.user.rentals);
                break;
            case 'Requests':
                filterRequests(state.user.owned);
                break;
            case 'Returns':
                filterReturns(state.user.owned);
                break;
            default:
                break;
        }
    }

    const handleItemReturn = (e) => {
        //make api call to change item with id to not rented
        const id = e.target.getAttribute('data-id')
        let statusData = {isRented: false, active: false};
        returnItem(id, statusData)
        .then(res => {
            const filtered = filterOffItem(id, state.user.rentals)
            filterRentals(filtered);
        })
    }

    const handleConfirmReturned = (e) => {
        const id = e.target.getAttribute('data-id')
        const requestId = e.target.getAttribute('data-renterid');
        let statusData = {active: true}
        confirmReturn(id, statusData)
        .then(res => {
            //pull item from rented user
            removeAppointment(id, {appointmendId: res.data.currentAppointment[0]})
            removeRental(requestId, {itemId: id})
            const filtered = filterOffItem(id, state.user.owned)
            filterReturns(state.user.rentals)
        })
    }

    const handleAccept = (e) => {
        //make api call to set item with id to rented and pending to false
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const requestId = e.target.getAttribute('data-renterid')
        console.log(requestId);
        let statusData = {pendingRequest: false, isRented: true}
        approveRental(id, statusData)
        .then(res => {
            console.log(res.data);
            addRental(requestId, {itemId: id});
            const filtered = filterOffItem(id, state.user.owned);
            filterRequests(filtered)
            // setRequests(filtered);
        })
        .catch(res => console.log(res));
    }

    const handleReject = (e) => {
        //make api call to set pending to false. handle rejection message?
        const id = e.target.getAttribute('data-id');
        console.log(id);
        let statusData = {pendingRequest: false};
        declineRental(id, statusData)
        .then(() => {
            const filtered = filterOffItem(id, state.user.owned);
            filterRentals(filtered);
        })
        .catch(res => console.log(res));
    }
    
    const filterOffItem = (id, array) => {
        const filteredItems = array.filter(item => {
            return(item._id !== id)
        })

        return filteredItems;
    }

    useEffect(() => {
        if(!state.user) {
            history.push('/signup');
        } else {
            getProfile(state.user.userId)
            .then(res => {
                setUserState(res.data[0]);
            })
        }
    }, [])

    return (
        <div>
            { state.user ? 
            <div className='profile-page'>
                <Nav currentPage = 'profile'/>
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
                                    title={rental.name}
                                    startDate={rental.currentAppointment[0].startDate}
                                    endDate={rental.currentAppointment[0].endDate}>
                                    <ReturnButton onClick={handleItemReturn} data-id={rental._id}>Return</ReturnButton>
                                    <MessageOwnerButton></MessageOwnerButton>
                                </ProfileItemContainer>
                            )):<div>No Rentals</div>}</>
                            : selected === 'Requests' ? <>{requests.length !== 0 ? requests.map(request => (                
                                <ProfileItemContainer 
                                    image={request.img}
                                    title={request.name}
                                    startDate={request.currentAppointment[0].startDate}
                                    endDate={request.currentAppointment[0].endDate}>
                                    <SuccessButton onClick={handleAccept} data-renterid={request.renterUserId} data-id={request._id}>Accept</SuccessButton>
                                    <RejectButton onClick={handleReject} data-id={request._id}>Reject</RejectButton>
                                </ProfileItemContainer>
                            )):<div>No Requests</div>}</>
                            : selected === 'Returns' ? <>{returns.length !== 0 ? returns.map(returnItem => (                
                                <ProfileItemContainer 
                                    image={returnItem.img}
                                    title={returnItem.name}
                                    startDate={returnItem.currentAppointment[0].startDate}
                                    endDate={returnItem.currentAppointment[0].endDate}>
                                    <SuccessButton onClick={handleConfirmReturned} data-renterid={returnItem.renterUserId} data-id={returnItem._id}>Confirm</SuccessButton>
                                    {/* <RejectButton onClick={handlePageChange} data-id={returnItem._id}>Report</RejectButton> */}
                                </ProfileItemContainer>
                            )):<div>No Returns</div>}</>
                            : <div className="box">
                                <h2 className="subtitle is-2">{`${state.user ? state.user.firstName: <></>} ${state.user ? state.user.lastName: <></>} (${state.user.username})`}</h2>
                                <figure class="image is-32x32">
                                    <img class="is-rounded" src={state.user.icon}/>
                                </figure>
                                <div className="content">
                                    <h6 className="subtitle is-6">{state.user ? `${state.user.address} ${state.user.city}, ${state.user.state} ${state.user.zipCode}`: <> </>}</h6>
                                    <h6 className="subtitle is-6">Total listings: {state.user ? state.user.owned.length : 'no listing'}</h6>
                                    <h6 className="subtitle is-6">Items Renting: {state.user ? state.user.rentals.length : 'no listing'}</h6>
                                    <NavLink to="/editprofile"><i className={`fas fa-pencil-alt`}></i></NavLink>
                                </div>
                            </div>}
                    </Container>


                </Section>
            </div> : <div></div> }
        </div>
    )
}

export default Profile;