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
        getItem(id, (res) => {
            console.log('hi from useEffect/getItem')
            res = res[0]
            console.log(res);
            setItem(res)
        })
    }, []);

    

    return (
        <div class="container">
            <div class="title">{item.name}</div>
            <div class="columns">
                <figure class="image">
                    <img src={item.img} size={64} alt=""></img>
                </figure>
            </div>
            <div class="column is-half">
                <div class="content">
                    <div class="title is-5">Description: {item.description}</div>
                    <div class="title is-5">Price: ${item.price} per day</div>
                    <div class="title is-5">Location: {item.city}, {item.state}</div>
                    <div class="title is-5">Owner: {item.firstName} ", " {item.lastName}</div>
                    <MessageOwnerButton></MessageOwnerButton>
                </div>
            </div>
        </div>



    )
}

export default ItemInfo;