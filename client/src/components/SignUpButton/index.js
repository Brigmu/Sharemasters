import React from "react";
import {NavLink} from "react-router-dom";

const SignUpButton = () => {
    return (
        <NavLink to="/signup" className="button is-primary">
            <p>Sign Up</p>
        </NavLink>
    );
}

export default SignUpButton;