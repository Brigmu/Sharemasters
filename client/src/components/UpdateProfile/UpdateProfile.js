import React, {useRef, useState } from 'react';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";
import FormHelp from "../FormHelp/FormHelp";
import { updateProfile } from '../../utils/API/API';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER } from "../../utils/UserContext/UserActions";

const UpdateProfile = (props) => {
    const [state, dispatch] = useStoreContext();

    const setUserState = (user) => {
        dispatch({
            type: SET_USER,
            user: user
        });
    };

    //profile fields refs
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipCodeRef = useRef();

    const [signupErrorState, setSignupError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = {
            address: addressRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            zipCode: zipCodeRef.current.value,
            email: emailRef.current.value,
        }

        updateProfile(state.user.userId, updatedUser)
        .then(() => {
            //updatesuccess
            setSignupError({});
            console.log("User Updated");
            setUserState(updatedUser);
        })
        .catch(err => {
            // update fail
            setSignupError(err.response.data.err);
        });
    }

    return (
        <section className="section">
            <div className="container notification is-info is-light">
                <FormField label="First Name" >
                    <FormControl>
                        <div>{state.user.firstName}</div>
                    </FormControl>
                </FormField>
                <FormField label="Last Name">
                    <FormControl>
                        <div>{state.user.lastName}</div>
                    </FormControl>
                </FormField>
                <FormField label="Address">
                    <FormControl>
                        <input className="input" type="text" placeholder="5555 N Main St" ref={addressRef} />
                    </FormControl>
                </FormField>
                <div className="is-horizontal">
                    <FormField label="City">
                        <FormControl>
                            <input className="input" type="text" placeholder="Seattle" ref={cityRef} />
                        </FormControl>
                    </FormField>
                    <FormField label="State">
                        <FormControl>
                            <input className={`input ${signupErrorState.state ? "is-danger" : ""}`} type="text" placeholder="Washington" ref={stateRef} />
                        </FormControl>
                    </FormField>
                    <FormField label="Zip Code">
                        <FormControl>
                            <input className={`input ${signupErrorState.zipCode ? "is-danger" : ""}`} type="text" placeholder="98001" ref={zipCodeRef} />
                        </FormControl>
                    </FormField>
                </div>
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
                <FormField label="Username">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <div>{state.user.username}</div>
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

export default UpdateProfile;