import React, { useState, useEffect } from "react";

//user context
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { SET_USER, CLEAR_USER } from "../../utils/UserContext/UserActions";
import {getCurrentUser, getProfile} from '../../utils/API/API';
import Nav from "../../components/Nav/Nav";

const Profile = () => {
    // state information

    return (
        <Nav />
        
    );
}

export default Profile;