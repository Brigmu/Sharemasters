import React, {useRef, useState, useEffect } from 'react';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";
import FormHelp from "../FormHelp/FormHelp";
import StatesDropdown from "../StatesDropdown/StatesDropdown";
import images from "../../images";
import { Button, Section, Container, Columns} from "react-bulma-components";
import { updateProfile, getCurrentUser, getProfile } from '../../utils/API/API';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER } from "../../utils/UserContext/UserActions";

const UpdateProfile = (props) => {
    const [state, dispatch] = useStoreContext();
    const [selectedIcon, setIcon] = useState(); 

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
            address: addressRef.current.value.length > 0  ? addressRef.current.value : state.user.address,
            city: cityRef.current.value.length > 0 ? cityRef.current.value : state.user.city,
            state: stateRef.current.value.length > 0 ? stateRef.current.value : state.user.state,
            zipCode: zipCodeRef.current.value.length > 0 ? zipCodeRef.current.value : state.user.zipCode,
            email: emailRef.current.value.length > 0 ? emailRef.current.value : state.user.email,
            icon: selectedIcon ? selectedIcon : state.user.icon
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

    const handleIconSelect = (e) => {
        setIcon(e.target.value);
    }


    return (
        <Section>
            <Container className="notification is-info is-light">
                <h3 className="subtitle is-3">{`${state.user.firstName} ${state.user.lastName} (${state.user.username})`}</h3>
                <Columns>
                    <Columns.Column className="is-narrow">
                        <FormField label="Profile Icon">
                            <FormControl>
                                <Columns>
                                    { images.map(({id, src}) => {
                                        return (
                                            <Columns.Column key={ id } className="is-narrow">
                                                <label className="radio">
                                                    <input type="radio" name="icon" value={ src } onClick={ handleIconSelect }/>
                                                    <img src={ src }/>
                                                </label>
                                            </Columns.Column>
                                        )
                                    }) }
                                </Columns>
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                </Columns>
                <FormField label="Address">
                    <FormControl>
                        <input className="input" type="text" placeholder="5555 N Main St" defaultValue={state.user.address ? state.user.address : ""} ref={addressRef} />
                    </FormControl>
                </FormField>
                <Columns>
                    <Columns.Column>
                        <FormField label="City">
                            <FormControl>
                                <input className="input" type="text" placeholder="Seattle" defaultValue={state.user.city ? state.user.city: ""} ref={cityRef} />
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                    <Columns.Column className="is-narrow">
                        <FormField label="State">
                            <FormControl>
                                <StatesDropdown stateRef={stateRef} defaultState={state.user.state ? state.user.state : null}></StatesDropdown>
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                    <Columns.Column className="is-narrow">
                        <FormField label="Zip Code">
                            <FormControl>
                                <input className={`input ${signupErrorState.zipCode ? "is-danger" : ""}`} type="text" placeholder="00000" defaultValue={state.user.zipCode ? state.user.zipCode : ""} ref={zipCodeRef} />
                            </FormControl>
                        </FormField>
                    </Columns.Column>
                </Columns>
                <FormField label="Email">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input 
                            className={`input ${signupErrorState.email ? "is-danger" : ""}`} type="email" placeholder="@email.com" defaultValue={state.user.email? state.user.email: ""} ref={emailRef} />
                        <FormIcon size="small" side="left" icon="envelope" />
                        <FormIcon size="small" side="right" icon="exclamation-triangle" />
                    </FormControl>
                </FormField>
                <div className="field is-grouped">
                    <div className="control">
                        <Button className="is-link" type="submit" onClick={handleSubmit}>Submit</Button>
                    </div>
                    <FormHelp type="danger" message={signupErrorState ? signupErrorState.message : ""} />
                </div>
            </Container>
        </Section>
    )
}

export default UpdateProfile;