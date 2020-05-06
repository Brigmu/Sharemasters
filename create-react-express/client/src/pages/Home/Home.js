import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import './styles.css';
import UserContext from '../../utils/UserContext/UserContext';
import {getUserData} from '../../utils/API/API';
import SearchBar from '../../components/SearchBar';
import Hero from '../../components/Hero';


const Home = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        id: ''
    });
    
    useEffect(()=>{
        getUserData(1, (results) => {
            console.log(results);
            setUserInfo(results);
        })
    }, [])
    
    return (
        <div className = 'homepage'>
            <UserContext.Provider value={userInfo}>
                <Hero />
            </UserContext.Provider>
        </div>
    )
}

export default Home;