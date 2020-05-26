import React, {useRef, useState, useEffect } from 'react';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";
import FormHelp from "../FormHelp/FormHelp";
import StatesDropdown from "../StatesDropdown/";
import IconDropdown from "../IconDropdown/IconDropdown";
import { updateProfile } from '../../utils/API/API';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { getCurrentUser, getProfile } from '../../utils/API/API';
import { SET_USER } from "../../utils/UserContext/UserActions";

const UpdateProfile = (props) => {
    const [state, dispatch] = useStoreContext();

    const setUserState = (user) => {
        dispatch({
            type: SET_USER,
            user: user
        });
    };

    useEffect(()=>{
        if (!state.user) {
            getCurrentUser().then(res => {
                if (res.data.user) {
                    getProfile(res.data.user._id)
                        .then(res => {
                            setUserState(res.data[0]);
                    });
                }
            });
        }
    }, []);

    //profile fields refs
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipCodeRef = useRef();
    const iconRef = useRef();

    const [signupErrorState, setSignupError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = {
            address: addressRef.current.value.length > 0  ? addressRef.current.value : state.user.address,
            city: cityRef.current.value.length > 0 ? cityRef.current.value : state.user.city,
            state: stateRef.current.value.length > 0 ? stateRef.current.value : state.user.state,
            zipCode: zipCodeRef.current.value.length > 0 ? zipCodeRef.current.value : state.user.zipCode,
            email: emailRef.current.value.length > 0 ? emailRef.current.value : state.user.email,
            icon: iconRef.current.value.length > 0 ? iconRef.current.value : state.user.icon
        }

        updateProfile(state.user.userId, updatedUser)
        .then(() => {
            //updatesuccess
            setSignupError({});
            alert("Profile Updated");
            updateUserState();
        })
        .catch(err => {
            // update fail
            setSignupError(err.response.data.err);
        });
    }

    const updateUserState = () => {
        getCurrentUser().then(res => {
            getProfile(res.data.user._id)
                .then(res => {
                    setUserState(res.data[0]);
            });
        });
    }

    return (
        <section className="section">
            <div className="container notification is-info is-light">
                <FormField label="Profile Icon">
                    <FormControl>
                        <IconDropdown iconRef={iconRef}></IconDropdown>
                    </FormControl>
                </FormField>
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
                            <StatesDropdown stateRef={stateRef}></StatesDropdown>
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