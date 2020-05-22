import React, {useRef, useState } from 'react'
import { useHistory, StaticRouter } from 'react-router-dom';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import { Button, Columns} from "react-bulma-components";
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
                            history.push("/editprofile");
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
            <Columns>
                <Columns.Column>
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
                </Columns.Column>
                <Columns.Column>
                    <FormField fieldClass="is-horizontal">
                        <FormControl controlClass="has-icons-left has-icons-right">
                            <input 
                                className={`input ${ loginErrorState.error ? "is-danger" : "" }`}
                                type="text"
                                placeholder="Password"
                                ref={passwordLoginRef} />
                            <FormIcon size="small" side="left" icon="lock" />
                            <FormIcon size="small" side="right" icon="exclamation-triangle" />
                        </FormControl>
                    </FormField>
                </Columns.Column>
                <Columns.Column className="is-narrow">
                    <Button style={ { width: "75px" } } className="button is-info" onClick={handleLogin}>Log In</Button>
                </Columns.Column>
            </Columns>
        </div>
    )
}

export default NavLogin;