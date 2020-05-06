import React, {useRef} from 'react'
import './styles.css';
import UserForm from '../../components/UserForm/UserForm';
import {signupUser} from '../../utils/API/API';

const Signup = () => {
    const usernameRef = useRef();
    const passowrdRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = usernameRef.current.value;
        let password = passowrdRef.current.value
        const userData = {username: username, passowrd: password};
        signupUser(userData)
        .then(results => {
            console.log(results);
        })

        usernameRef.current.value='';
        passowrdRef.current.value='';
        

    }
    return (
        <div className='signup-page'>
            <UserForm title='Signup' href='/login' paragraphText = 'Already have an account?' anchorText='Login' userRef={usernameRef} pwRef={passowrdRef} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Signup;
