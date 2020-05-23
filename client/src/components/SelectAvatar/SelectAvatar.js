import React, {useRef, useState } from 'react';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";
import FormHelp from "../FormHelp/FormHelp";
import { updateProfile } from '../../utils/API/API';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER } from "../../utils/UserContext/UserActions";

const SelectAvatar = (props) => {
    const [state, dispatch] = useStoreContext();
    const [selected, setSelected] = useState();

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
            avatar: `/images/${selected}.png`
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
            
        </section>
    )
}

export default SelectAvatar;