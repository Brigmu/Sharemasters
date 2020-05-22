import React, { useState, useEffect } from 'react';
import './styles.css';
import { Section, Container, Tile, Heading, Columns } from "react-bulma-components";

//pages
import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API/API';


import MessageOwnerButton from '../MessageOwnerButton/MessageOwnerButton';


function ItemInfo() {
    const [item, setItem] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
        .then(res => {
            console.log('hi from useEffect/getItem')
            console.log(res.data);
            setItem(res.data)
        })
            
    }, []);

    

    return (
        <div className="container">
            <div className="title">{item.name}</div>
            <div className="columns">
                <figure className="image">
                    <img src={item.img} size={64} alt=""></img>
                </figure>
            </div>
            <div className="column is-half">
                <div className="content">
                    <div className="title is-5">Description: {item.description}</div>
                    <div className="title is-5">Price: ${item.price} per day</div>
                    <div className="title is-5">Location: {item.city}, {item.state}</div>
                    <div className="title is-5">Owner: {item.firstName} ", " {item.lastName}</div>
                    <MessageOwnerButton></MessageOwnerButton>
                </div>
            </div>
        </div>



    )
}

export default ItemInfo;