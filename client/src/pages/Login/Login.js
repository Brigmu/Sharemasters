import React from 'react'
import './styles.css';
import UserForm from '../../components/UserForm/UserForm';

const Login = () => {
    return (
        <div className='login-page'>
            <UserForm title='Login' href='/signup' paragraphText = 'Dont have an account?' anchorText='Signup'/>
        </div>
    )
}

export default Login;
