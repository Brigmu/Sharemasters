import React, {useRef, useState } from 'react'
import { useHistory, StaticRouter } from 'react-router-dom';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";
import {loginUser, getCurrentUser, getProfile} from '../../utils/API/API';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER } from "../../utils/UserContext/UserActions";

const NavLogin = () => {
    const [state, dispatch] = useStoreContext();

    const setUserState = (user) => {
        dispatch({
            type: SET_USER,
            user: user
        });
    };
        
    // login refs
    const usernameLoginRef = useRef();
    const passwordLoginRef = useRef();
    const loginInputs = [usernameLoginRef, passwordLoginRef];

    // error context
    const [loginErrorState, setLoginError] = useState({});

    // handle redirect
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            username: usernameLoginRef.current.value,
            password: passwordLoginRef.current.value
        }

        loginUser(user)
            .then(res => {
                // login success  -> get user profile -> set user state
                setLoginError({ error: false});
                getCurrentUser().then(res => {
                    getProfile(res.data.user._id)
                        .then(res => {
                            setUserState(res.data[0]);
                            history.push("/profile");
                    });
                });
            })
            .catch(err => {
                setLoginError({ error: true, message: err.message });
            })

        // reset form
        loginInputs.forEach(input => input.current.value = '' );           
    }

    return (
        <div className="container">
            <FormField fieldClass="is-horizontal">
                <FormControl controlClass="has-icons-left">
                    <input 
                        className={`input ${ loginErrorState.error ? "is-danger" : "" }`}
                        type="text"
                        placeholder="Username"
                        ref={usernameLoginRef} />
                    <FormIcon size="small" side="left" icon="user" />
                </FormControl>
            </FormField>
            <FormField fieldClass="is-horizontal">
                <FormControl controlClass="has-icons-left has-icons-right">
                    <input 
                        className={`input ${ loginErrorState.error ? "is-danger" : "" }`}
                        type="text"
                        placeholder="Enter a secure password"
                        ref={passwordLoginRef} />
                    <FormIcon size="small" side="left" icon="lock" />
                    <FormIcon size="small" side="right" icon="exclamation-triangle" />
                </FormControl>
            </FormField>
            <FormField fieldClass="is-horizontal">
                <FormControl>
                    <button className="button is-info" onClick={handleLogin}>Log In</button>
                </FormControl>
            </FormField>
        </div>
    )
}

export default NavLogin;