import React, {useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
// import FormInput from "../FormInput/FormInput";
import FormIcon from "../FormIcon/FormIcon";
import FormHelp from "../FormHelp/FormHelp";
import {signupUser, getCurrentUser, createProfile} from '../../utils/API/API';

const UserForm = (props) => {
    //signup refs
    const usernameRef = useRef();
    const passwordRef = useRef(); 
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const zipCodeRef = useRef();

    const [signupErrorState, setSignupError] = useState({});

    const profileInputs = [usernameRef, passwordRef, firstNameRef, lastNameRef, emailRef, zipCodeRef];
    
    const history = useHistory();

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
                        history.push("/");
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



    return (
        <section className="section">
            <div className="container notification is-info is-light">
                <FormField label="First Name" >
                    <FormControl>
                        <input className="input" type="text" placeholder="Alex" ref={firstNameRef} />
                    </FormControl>
                </FormField>
                <FormField label="Last Name">
                    <FormControl>
                        <input className="input" type="text" placeholder="Lee" ref={lastNameRef} />
                    </FormControl>
                </FormField>
                <FormField label="Zip Code">
                    <FormControl>
                        <input className="input" type="text" placeholder="zip code" ref={zipCodeRef} />
                    </FormControl>
                </FormField>
                <FormField label="Username">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input 
                            className="input"
                            type="text"
                            placeholder="Username"
                            ref={usernameRef} />
                        <FormIcon size="small" side="left" icon="user" />
                        <FormIcon size="small" side="right" icon="check" />
                    </FormControl>
                </FormField>
                <FormField label="Email">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input 
                            className="input"
                            type="email"
                            placeholder="Email input"
                            ref={emailRef} />
                        <FormIcon size="small" side="left" icon="envelope" />
                        <FormIcon size="small" side="right" icon="exclamation-triangle" />
                    </FormControl>
                    </FormField>
                <FormField label="Password">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input 
                            className="input"
                            type="text"
                            placeholder="Enter a secure password"
                            ref={passwordRef} />
                        <FormIcon size="small" side="left" icon="lock" />
                        <FormIcon size="small" side="right" icon="exclamation-triangle" />
                    </FormControl>
                </FormField>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                    <FormHelp type="danger" message={signupErrorState ? signupErrorState.message : ""} />
                </div>
            </div>
        </section>
    )
}

export default UserForm;