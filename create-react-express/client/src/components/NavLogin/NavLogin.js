import React, {useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";
import {loginUser, getCurrentUser, getProfile} from '../../utils/API/API';


const NavLogin = () => {

    //login refs
    const usernameLoginRef = useRef();
    const passwordLoginRef = useRef();

    //error context
    const [loginErrorState, setLoginError] = useState({});

    const loginInputs = [usernameLoginRef, passwordLoginRef];

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: usernameLoginRef.current.value,
            password: passwordLoginRef.current.value
        }
        loginUser(user)
            .then(res => {
                setLoginError({ error: false});
                getCurrentUser().then(res => {
                    console.log(res.data.user);
                    getProfile(res.data.user._id)
                        .then(res => {
                            console.log(res.data);
                            //set user state
                            // history.push("/");
                    });
                });
            })
            .catch(err => {
                console.log(err.response.data.message);
                setLoginError({ error: true});
                console.log(loginErrorState);
            })
        loginInputs.forEach(input => input.current.value = '' );           
    }

    return (
        <div>
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