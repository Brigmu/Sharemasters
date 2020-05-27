import React, { useEffect } from 'react';
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile';
import Nav from '../../components/Nav/Nav';
import { useStoreContext } from "../../utils/UserContext/UserContext";
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
    const [state, dispatch] = useStoreContext();
    const history = useHistory();

    useEffect(()=>{
        if(!state.user) {
            history.push('/signup');
        }
    }, []);

    return (
        <div>
            <Nav></Nav>
            {state.user ? <UpdateProfile /> : <div></div>}
        </div>
    )
}

export default EditProfile;
