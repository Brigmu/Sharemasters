import React, { useRef } from 'react'
import './styles.css';
import UserForm from '../../components/UserForm/UserForm';
import {loginUser} from '../../utils/API/API';

const Login = () => {
    const usernameRef = useRef();
    const passowrdRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {username: usernameRef.current.value, passowrd: passowrdRef.current.value};
        loginUser(userData);

    }
    return (
        <div className='login-page'>
            <UserForm title='Login' href='/signup' paragraphText = 'Dont have an account?' anchorText='Signup' userRef={usernameRef} pwRef={passowrdRef} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Login;
