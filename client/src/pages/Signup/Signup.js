import React from 'react'
import UserForm from '../../components/UserForm/UserForm';
import Nav from '../../components/Nav/Nav';
import NavLogin from '../../components/NavLogin/NavLogin';
import { Columns, Container } from "react-bulma-components";

const Signup = () => {
    return (
        <div className='signup-page'>
            <Nav />
            <Container>
                <Columns>
                    <Columns.Column>
                        <NavLogin />
                    </Columns.Column>
                    <Columns.Column>
                        <UserForm />
                    </Columns.Column>
                </Columns>
            </Container>
            
            
            
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

export default Signup;
