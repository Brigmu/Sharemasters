import React, {useRef, useState } from 'react'
// import './styles.css';
import UserForm from '../../components/UserForm/UserForm';
import Nav from '../../components/Nav/Nav';
import NavLogin from '../../components/NavLogin/NavLogin';
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import {signupUser, loginUser, getCurrentUser, getCurrentProfile, createProfile} from '../../utils/API/API';

const Signup = () => {
    //signup refs
    const usernameRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const zipCodeRef = useRef();

    //login refs
    const usernameLoginRef = useRef();
    const passwordLoginRef = useRef();

    //error context
    const [loginErrorState, setLoginError] = useState({});
    const [signupErrorState, setSignupError] = useState({});

    const profileInputs = [usernameRef, passwordRef, firstNameRef, lastNameRef, emailRef, zipCodeRef];
    const loginInputs = [usernameLoginRef, passwordLoginRef];

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            username: usernameRef.current.value,
            zipCode: zipCodeRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        signupUser(newUser)
            .then(res => {
                console.log(res.data.message);
                setSignupError({});
                createProfile(newUser)
                    .then(res => {
                        console.log(`Profile for ${res.data.username} has been created`);
                        //reroute
                    })
                    .catch(err => {
                        console.log(err.response);
                    })
                    //handle errors
            })
            .catch(err => {
                console.log(err.response);
                setSignupError(err.response.data.err);
                console.log(signupErrorState);
            });
        profileInputs.forEach(input => input.current.value = '' );           
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: usernameLoginRef.current.value,
            password: passwordLoginRef.current.value
        }
        loginUser(user)
            .then(res => {
                setLoginError({ error: false});
                getCurrentUser().then(res => {
                    console.log(res.data.user);
                    //set user state
                });
            })
            .catch(err => {
                console.log(err.response.data.message);
                setLoginError({ error: true});
                console.log(loginErrorState);
            })
        loginInputs.forEach(input => input.current.value = '' );           
    }

    return (
        <div className='signup-page'>
            <Nav>
                <NavLogin
                    usernameLoginRef={usernameLoginRef}
                    passwordLoginRef={passwordLoginRef}
                    handleLogin={handleLogin}
                    loginError={loginErrorState}
                />
                <LogoutButton />
            </Nav>
            <UserForm 
                usernameRef={usernameRef} 
                passwordRef={passwordRef} 
                firstNameRef={firstNameRef}
                lastNameRef={lastNameRef}
                emailRef={emailRef}
                zipCodeRef={zipCodeRef}
                handleSubmit={handleSubmit}
                signupError={signupErrorState}
            />
        </div>
    )
}

export default Signup;
