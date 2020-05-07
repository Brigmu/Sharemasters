import React, {useRef} from 'react'
import './styles.css';
import UserForm from '../../components/UserForm/UserForm';
import {signupUser} from '../../utils/API/API';

const Signup = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = usernameRef.current.value;
        let password = passwordRef.current.value
        const userData = {username: username, password: password};
        signupUser(userData);


        usernameRef.current.value='';
        passwordRef.current.value='';
        

    }
    return (
        <div className='signup-page'>
            <UserForm title='Signup' href='/login' paragraphText = 'Already have an account?' anchorText='Login' userRef={usernameRef} pwRef={passwordRef} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Signup;
