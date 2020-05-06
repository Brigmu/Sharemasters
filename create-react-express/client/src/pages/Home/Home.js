import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import './styles.css';
import UserContext from '../../utils/UserContext/UserContext';
import {getUserData} from '../../utils/API/API';



const Home = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        id: ''
    });
    
    useEffect(()=>{
        // getUserData(1, (results) => {
        //     console.log(results);
        //     setUserInfo(results);
        // })
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