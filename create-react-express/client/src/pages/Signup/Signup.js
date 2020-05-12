import React, {useRef} from 'react'
// import './styles.css';
import UserForm from '../../components/UserForm/UserForm';
import Nav from '../../components/Nav/Nav';
import NavLogin from '../../components/NavLogin/NavLogin';
import {signupUser, loginUser, getUserData, createProfile, logoutUser} from '../../utils/API/API';

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
                createProfile(newUser)
                    .then(res => console.log(`Profile for ${res.data.username} has been created`))
                    .catch(err => console.log(err.response))
                    //handle errors
            })
            .catch(err => console.log(err.response));
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
                console.log(res);
                getCurrentUser().then((res) => {console.log(res.data.user)});
            })
            .catch(err => console.log(err.response))
        loginInputs.forEach(input => input.current.value = '' );           
    }

    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser()
            .then(res => console.log(res.data.message))
    }

    return (
        <div className='signup-page'>
            <Nav>
                <NavLogin
                    usernameLoginRef={usernameLoginRef}
                    passwordLoginRef={passwordLoginRef}
                    handleLogin={handleLogin}
                />
                <button onClick={handleLogout} className="button is-danger">Logout</button>
            </Nav>
            <UserForm 
                usernameRef={usernameRef} 
                passwordRef={passwordRef} 
                firstNameRef={firstNameRef}
                lastNameRef={lastNameRef}
                emailRef={emailRef}
                zipCodeRef={zipCodeRef}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Signup;
