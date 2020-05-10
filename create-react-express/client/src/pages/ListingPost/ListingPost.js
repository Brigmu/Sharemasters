import React from 'react'
import './styles.css';
import Nav from '../../components/Nav/Nav'
// import UserForm from '../../components/UserForm/UserForm';
import Container from '../../components/Container/Container'

const ListingPage = (props) => {
    return (
        <div className = 'listing-page'>
            <Nav />
            <Container class = 'listing-container'>
            </Container>
        </div>
    )
}

export default ListingPage;