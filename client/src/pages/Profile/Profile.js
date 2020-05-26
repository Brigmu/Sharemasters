import React, { useState, useEffect } from "react";
import { Button } from 'react-bulma-components/dist/react-bulma-components.min.css';

//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { useUserItemsContext } from "../../utils/UserItemsContext/UserItemsContext";
import { UserItemsProvider } from "../../utils/UserItemsContext/UserItemsContext";
import { SET_OWNED, SET_RENTALS } from "../../utils/UserItemsContext/UserItemsActions";
import { getProfile, addRental, removeRental } from '../../utils/API/API';

import Nav from "../../components/Nav/Nav";
import NavTabs from "../../components/NavTabs/NavTabs";
import {Section, Container} from 'react-bulma-components';
import ProfileItemContainer from "../../components/ProfileItemContainer";
import { useHistory} from 'react-router-dom';

//put buttons in ProfileItemContent children
// Rental Buttons
import ReturnButton from "../../components/ReturnButton";
import MessageOwnerButton from "../../components/MessageOwnerButton";

// Listings and Return Buttons 
// Accept/Reject for Listings and Confirm/Report for Returns
import SuccessButton from "../../components/SuccessButton";
import RejectButton from "../../components/RejectButton";

//API functions
import {approveRental, declineRental, returnItem, confirmReturn} from '../../utils/API/API';

const Profile = () => {
    // state information
    // const [allitems, setallitems] = useState([])
    const [requests, setRequests] = useState([]);
    const [rentals, setRentals] = useState([]);
    const [returns, setReturns] = useState([]);
    const [state, dipatch] = useStoreContext();
    // const [userItems, setItems] = useUserItemsContext(); //userItems.rented and userItems.owned
    const history = useHistory();

    // if(!state.user) {
    //     history.push('/signup');
    // }

    console.log(state);
    console.log(state.user);

    const [selected, setSelected] = useState('Profile');

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

    const setRentalsHelper = (items) => {
<<<<<<< HEAD:client/src/pages/Profile/Profile.js
        // setItems({
        //     type: SET_RENTALS,
        //     rentals: items
        // });
    };

    const setOwned= (items) => {
        // setItems({
        //     type: SET_OWNED,
        //     owned: items
        // });
=======
        setItems({
            type: SET_RENTALS,
            rentals: items
        });
    };

    const setOwnedHelper= (items) => {
        setItems({
            type: SET_OWNED,
            owned: items
        });
>>>>>>> MVP:create-react-express/client/src/pages/Profile/Profile.js
    };

    const setAll = () => {
        getProfile(state.user.userId)
            .then(res => {
<<<<<<< HEAD:client/src/pages/Profile/Profile.js
                console.log(res.data);
                // setRentalsHelper(res.data.rentals);
                // setOwned(res.data.owned);
=======
                setRentalsHelper(res.data.rentals);
                setOwnedHelper(res.data.owned);
>>>>>>> MVP:create-react-express/client/src/pages/Profile/Profile.js
            })
            .catch(err => console.log(err.response))
    }

    useEffect(() => {
        if(state.user){
        filterRequests(state.user.owned);
        filterRentals(state.user.rentals)
        filterReturns(state.user.owned)
        } else {
            history.push('/signup')
        }
        // filterRental()
        // filterReturns()
    }, [])

    return (
        <UserItemsProvider>
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
                                    title={rental.name}
                                    startDate={''}
                                    endDate={''}>
                                    <ReturnButton onClick={handleItemReturn} data-id={rental._id}>Return</ReturnButton>
                                    <MessageOwnerButton></MessageOwnerButton>
                                </ProfileItemContainer>
                            )):<div>No Rentals</div>}</>
                            : selected === 'Requests' ? <>{requests.length !== 0 ? requests.map(request => (                
                                <ProfileItemContainer 
                                    image={request.img}
                                    title={request.name}
                                    startDate={''}
                                    endDate={''}>
                                    <SuccessButton onClick={handleAccept} data-renterid={request.renterUserId} data-id={request._id}>Accept</SuccessButton>
                                    <RejectButton onClick={handleReject} data-id={request._id}>Reject</RejectButton>
                                </ProfileItemContainer>
                            )):<div>No Requests</div>}</>
                            : selected === 'Returns' ? <>{returns.length !== 0 ? returns.map(returnItem => (                
                                <ProfileItemContainer 
                                    image={returnItem.img}
                                    title={returnItem.name}
                                    startDate={''}
                                    endDate={'test'}>
                                    <SuccessButton onClick={handleConfirmReturned} data-renterid={returnItem.renterUserId} data-id={returnItem._id}>Confirm</SuccessButton>
                                    {/* <RejectButton onClick={handlePageChange} data-id={returnItem._id}>Report</RejectButton> */}
                                </ProfileItemContainer>
                            )):<div>No Returns</div>}</>
                            : <div className="box">
                            <div className="title">Username: {state.user ? state.user.username : <></>}</div>
                            <br />
                            {/* <figure class="image is-128x128">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="" />
                            </figure> */}
                            <br />
                            <div className="content">
                                <div className="title is-5">Name: {state.user ? state.user.firstName: <></>} {state.user ? state.user.lastName: <></>}
                                </div>
                        <div className="title is-5">Location: {state.user ? `${state.user.address} ${state.user.city} ${state.user.state}`: <> </>}</div>
                            </div>
                                <div className='title is-5'>Total listings: {state.user ? state.user.owned.length : 'no listing'}</div>
                                <div className='title is-5'>Items Renting: {state.user ? state.user.rentals.length : 'no listing'}</div>
                                <Button href="/EditProfile"><i className={`fas fa-pencil`}></i></Button>
                            </div>}
                    </Container>


                </Section>
            </div>
        </UserItemsProvider>
        
    )
}

export default Profile;