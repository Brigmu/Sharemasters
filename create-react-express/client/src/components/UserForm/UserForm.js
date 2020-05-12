import React from 'react'
import './styles.css';
import FormField from "../FormField/FormField";
import FormControl from "../FormControl/FormControl";
// import FormInput from "../FormInput/FormInput";
import FormIcon from "../FormIcon/FormIcon";
import FormHelp from "../FormHelp/FormHelp";

const UserForm = (props) => {
    return (
        <section className="section">
            <div className="container notification is-info is-light">
                <FormField label="First Name" >
                    <FormControl>
                        <input className="input" type="text" placeholder="Alex" ref={props.firstNameRef} />
                    </FormControl>
                </FormField>
                <FormField label="Last Name">
                    <FormControl>
                        <input className="input" type="text" placeholder="Lee" ref={props.lastNameRef} />
                    </FormControl>
                </FormField>
                <FormField label="Zip Code">
                    <FormControl>
                        <input className="input" type="text" placeholder="zip code" ref={props.zipCodeRef} />
                    </FormControl>
                </FormField>
                <FormField label="Username">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input 
                            className="input"
                            type="text"
                            placeholder="Username"
                            ref={props.usernameRef} />
                        <FormIcon size="small" side="left" icon="user" />
                        <FormIcon size="small" side="right" icon="check" />
                    </FormControl>
                </FormField>
                <FormField label="Email">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input 
                            className="input"
                            type="email"
                            placeholder="Email input"
                            ref={props.emailRef} />
                        <FormIcon size="small" side="left" icon="envelope" />
                        <FormIcon size="small" side="right" icon="exclamation-triangle" />
                    </FormControl>
                    </FormField>
                <FormField label="Password">
                    <FormControl controlClass="has-icons-left has-icons-right">
                        <input 
                            className="input"
                            type="text"
                            placeholder="Enter a secure password"
                            ref={props.passwordRef} />
                        <FormIcon size="small" side="left" icon="lock" />
                        <FormIcon size="small" side="right" icon="exclamation-triangle" />
                    </FormControl>
                </FormField>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" type="submit" onClick={props.handleSubmit}>Submit</button>
                    </div>
                    <FormHelp type="danger" message={props.signupError ? props.signupError.message : ""} />
                </div>
            </div>
        </section>
    )
}

export default UserForm;