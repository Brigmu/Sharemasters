import React, { useState, useEffect } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER, CLEAR_USER } from "../../utils/UserContext/UserActions";
import {getCurrentUser, getProfile} from '../../utils/API/API';
import Nav from "../../components/Nav/Nav";
import Section from "../../components/Section";
import NavTabs from "../../components/NavTabs/NavTabs";
import {Container} from 'react-bulma-components';

const Profile = () => {
    // state information

    const [selected, setSelected] = useState('Proflie');

    const handlePageChange = (e) => {
        const nextPage = e.target.getAttribute('data-page');
        setSelected(nextPage);
    }

    

    return (
        <div className='profile-page'>
            <Nav />
            <br />
            <Container>
                <NavTabs handlePageChange={handlePageChange} tabs={['Profile', 'Rentals', 'Requests', 'Returns']} />
            </Container>
            <Section>
                {selected === 'Rentals' ? <div className='notification is-info'><button data-page='Requests' onClick={handlePageChange}>Next Page</button></div>
                    : selected === 'Requests' ? <div className='notification is-warning'><button data-page='Returns' onClick={handlePageChange}>Next Page</button></div>
                        : selected === 'Returns' ? <div className='notification is-primary'><button data-page='Profile' onClick={handlePageChange}>Next Page</button></div>
                            : <div className='notification is-danger'><button data-page='Rentals' onClick={handlePageChange}>Next Page</button></div>}
            </Section>
        </div>
        
    )
}

export default Profile;