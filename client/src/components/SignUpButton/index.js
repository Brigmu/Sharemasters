import React from "react";
import {NavLink} from "react-router-dom";

const SignUpButton = () => {
    return (
<<<<<<< HEAD
        <div>
            {/* <a href="/signup" className="button is-primary is-inverted">
                <span>Sign Up</span>
            </a> */}
        </div>
=======
        <NavLink to="/signup" className="button is-primary is-inverted">
            <span>Sign Up</span>
        </NavLink>
>>>>>>> authentication-pages
    );
}

export default SignUpButton;