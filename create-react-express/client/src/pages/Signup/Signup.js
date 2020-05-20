import React from 'react'
import UserForm from '../../components/UserForm/UserForm';
import Nav from '../../components/Nav/Nav';
import NavLogin from '../../components/NavLogin/NavLogin';

const Signup = () => {
    return (
        <div className='signup-page'>
            <Nav>
                <NavLogin />
            </Nav>
            <UserForm />
        </div>
    )
}

export default Signup;
