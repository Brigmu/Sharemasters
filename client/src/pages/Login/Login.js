import React, { useRef } from 'react'
import './styles.css';
import UserForm from '../../components/UserForm/UserForm';
import {loginUser, getUserData} from '../../utils/API/API';

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {username: usernameRef.current.value, password: passwordRef.current.value};
        loginUser(userData).then(results => {
            console.log(results);
        }).then((data) => console.log(data));
    }
    return (
        <div className='login-page'>
            <UserForm title='Login' href='/signup' paragraphText = 'Dont have an account?' anchorText='Signup' userRef={usernameRef} pwRef={passwordRef} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Login;
