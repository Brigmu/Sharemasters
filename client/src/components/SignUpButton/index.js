import React from "react";
import {NavLink} from "react-router-dom";

const SignUpButton = () => {
    return (
        <NavLink to="/signup" className="button is-primary is-inverted">
            <span>Sign Up</span>
        </NavLink>
    );
}

export default SignUpButton;