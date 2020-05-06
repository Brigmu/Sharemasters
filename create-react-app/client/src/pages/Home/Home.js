import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import './styles.css';
import UserContext from '../../utils/UserContext/UserContext';
import API from '../../utils/API/API';



const Home = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        id: ''
    });
    
    useEffect(()=>{
        API.loginUser({username: "thirduser", password: "password3"}, res => console.log(res));
    }, [])
    
    return (
        <div className = 'homepage'>
            <UserContext.Provider value={userInfo}>
                <Nav />
            </UserContext.Provider>
        </div>
    )
}

export default Home;