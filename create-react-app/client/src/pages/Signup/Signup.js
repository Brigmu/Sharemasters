import React from 'react'
import './styles.css';
import UserForm from '../../components/UserForm/UserForm';

const Signup = () => {
    return (
        <div className='signup-page'>
            <UserForm title='Signup' href='/login' paragraphText = 'Already have an account?' anchorText='Login'/>
        </div>
    )
}

export default Signup;
