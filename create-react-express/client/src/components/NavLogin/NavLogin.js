import React from 'react'
import './styles.css';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
import FormIcon from "../FormIcon/FormIcon";

const NavLogin = (props) => {
    return (
        <div className="container is-horizontal">
            <FormField fieldClass="is-horizontal">
                <FormControl controlClass="has-icons-left">
                    <input 
                        className={`input ${ props.loginError.error ? "is-danger" : "" }`}
                        type="text"
                        placeholder="Username"
                        ref={props.usernameLoginRef} />
                    <FormIcon size="small" side="left" icon="user" />
                </FormControl>
            </FormField>
            <FormField fieldClass="is-horizontal">
                <FormControl controlClass="has-icons-left has-icons-right">
                    <input 
                        className={`input ${ props.loginError.error ? "is-danger" : "" }`}
                        type="text"
                        placeholder="Enter a secure password"
                        ref={props.passwordLoginRef} />
                    <FormIcon size="small" side="left" icon="lock" />
                    <FormIcon size="small" side="right" icon="exclamation-triangle" />
                </FormControl>
            </FormField>
            <FormField fieldClass="is-horizontal">
                <FormControl>
                    <button className="button is-info" onClick={props.handleLogin}>Log In</button>
                </FormControl>
            </FormField>

        </div>
    )
}

export default NavLogin;