import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";
import FormHelp from "../FormHelp/FormHelp";
import StatesDropdown from "../StatesDropdown/";
import { loginUser, signupUser, getCurrentUser, createProfile, getProfile, deleteUser } from '../../utils/API/API';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER } from "../../utils/UserContext/UserActions";
import { Button, Section, Columns, Column } from "react-bulma-components";


const UserForm = (props) => {
    const [state, dispatch] = useStoreContext();

    const setUserState = (user) => {
        dispatch({
            type: SET_USER,
            user: user
        });
    };

    //signup refs
    const usernameRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipCodeRef = useRef();

    const [signupErrorState, setSignupError] = useState({ });

    const profileInputs = [usernameRef, passwordRef, firstNameRef, lastNameRef, emailRef, zipCodeRef, addressRef, cityRef, stateRef];

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        // for signup
        const newUser = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            username: usernameRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            zipCode: zipCodeRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        // for login
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        console.log(user);

        signupUser(user)
            .then(() => {
                //signup success
                setSignupError({});
                createProfile(newUser)
                    .then(res => {
                        alert(`Profile for ${res.data.username} has been created`);
                        loginHelper(user);
                        // reset form
                        profileInputs.forEach(input => input.current.value = '');
                    })
                    .catch(err => {
                        console.log(err.message);
                        //delete user from passport if profile create fails
                        deleteUser(newUser.username);
                        setSignupError(err.response.data.err.errors);
                    })
            })
            .catch(err => {
                // signup fail
                console.log(err.message);
                setSignupError(err.response.data.err ? err.response.data.err : err.response.data);
            });
    }

    const loginHelper = (user) => {
        loginUser(user)
        .then(() => {
            // login success -> get user profile -> set user state
            getCurrentUser().then(res => {
                getProfile(res.data.user._id)
                    .then(res => {
                        setUserState(res.data[0]);
                        history.push("/");
                });
            })
            .catch(err => {
                console.log(err.response.data.message);
            })
        });
    };

    return (
        <Section>
            <div className="container notification is-info is-light">
                <h1>Sign Up!</h1>
                <Columns>
                    <Columns.Column>
                        <FormField label="First Name" >
                            <FormControl>
                                <input className={`input ${signupErrorState.firstName ? "is-danger" : ""}`} type="text" placeholder="Alex" ref={firstNameRef} />
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                    <Columns.Column>
                        <FormField label="Last Name">
                            <FormControl>
                                <input className={`input ${signupErrorState.lastName ? "is-danger" : ""}`} type="text" placeholder="Lee" ref={lastNameRef} />
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                </Columns>
                <FormField label="Email">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input
                            className={`input ${signupErrorState.email ? "is-danger" : ""}`}
                            type="email"
                            placeholder="Email input"
                            ref={emailRef} />
                        <FormIcon size="small" side="left" icon="envelope" />
                        <FormIcon size="small" side="right" icon="exclamation-triangle" />
                    </FormControl>
                </FormField>
                <FormField label="Address">
                    <FormControl>
                        <input className="input" type="text" placeholder="5555 N Main St" ref={addressRef} />
                    </FormControl>
                </FormField>
                <Columns>
                    <Columns.Column>
                        <FormField label="City">
                            <FormControl>
                                <input className="input" type="text" placeholder="Seattle" ref={cityRef} />
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                    <Columns.Column className="is-narrow">
                        <FormField label="State">
                            <FormControl>
                                <StatesDropdown stateRef={stateRef}></StatesDropdown>
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                    <Columns.Column>
                        <FormField label="Zip Code" className="is-narrow">
                            <FormControl>
                                <input className={`input ${signupErrorState.zipCode ? "is-danger" : ""}`} type="text" placeholder="98001" ref={zipCodeRef} />
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                </Columns>
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
                <FormField label="Password">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="password"
                            placeholder="Enter a secure password"
                            ref={passwordRef} />
                        <FormIcon size="small" side="left" icon="lock" />
                        <FormIcon size="small" side="right" icon="exclamation-triangle" />
                    </FormControl>
                </FormField>
                <div className="field">
                    <Button style={ { width: "75px" } } className="button is-link" type="submit" onClick={handleSubmit}>Submit</Button>
                    <FormHelp type="danger" message={signupErrorState ? signupErrorState.message : ""} />
                </div>
            </div>
        </Section>
    );
}

export default UserForm;