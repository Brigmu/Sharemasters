import React from 'react'
import './styles.css';
import Nav from '../../components/Nav/Nav'
// import UserForm from '../../components/UserForm/UserForm';
import Container from '../../components/Container/Container'
import ItemForm from '../../components/ItemForm/ItemForm';

const ListingPage = (props) => {
    return (
        <div className = 'listing-page'>
            <Nav />
            {/* used container class component from bulma */}
            {/* <Container class = 'listing-container'>
            </Container> */}
            <Container>
                <ItemForm />
            </Container>
        </div>
    )
}

export default ListingPage;