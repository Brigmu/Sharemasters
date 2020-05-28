import React, {useRef, useState } from 'react'
import { useHistory, StaticRouter } from 'react-router-dom';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import { Button, Columns, Container, Section} from "react-bulma-components";
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
                            history.push("/");
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
        <Section>
            <Container class="notification">
                <div className="title">Welcome back</div>
                <h1>Log In</h1>
                <br></br>
                <Columns>
                <Columns.Column>
                    <form onSubmit={handleLogin}>
                    <FormField>
                        <FormControl controlClass="has-icons-left">
                            <input 
                                className={`input ${ loginErrorState.error ? "is-danger" : "" }`}
                                type="text"
                                placeholder="Username"
                                ref={usernameLoginRef} />
                            <FormIcon size="small" side="left" icon="user" />
                        </FormControl>
                    </FormField>
                    <FormField>
                        <FormControl controlClass="has-icons-left has-icons-right">
                            <input 
                                className={`input ${ loginErrorState.error ? "is-danger" : "" }`}
                                type="password"
                                placeholder="Password"
                                ref={passwordLoginRef} />
                            <FormIcon size="small" side="left" icon="lock" />
                            <FormIcon size="small" side="right" icon="exclamation-triangle" />
                        </FormControl>
                    </FormField>
                    <FormControl>
                            <input className="button is-info" type="submit" value="Log In" />
                    </FormControl>
                    </form>
                </Columns.Column>
            </Columns>
            </Container>
        </Section>
    )
}

export default NavLogin;