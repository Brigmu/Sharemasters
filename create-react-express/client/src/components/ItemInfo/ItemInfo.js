import React, { useState, useEffect } from 'react';
import './styles.css';
import { Section, Container, Columns } from "react-bulma-components";

//pages
import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API/API';

import MessageOwnerButton from '../MessageOwnerButton/MessageOwnerButton';
import ItemRequestForm from '../ItemRequestForm/ItemRequestForm'


function ItemInfo() {
    const [item, setItem] = useState({})
    const { id } = useParams();
    const [ownerInfo, setOwnerInfo] = useState({})

    useEffect(() => {
        getItem(id, (res) => {
            res = res[0]
            console.log(res);
            console.log(res.ownerInfo[0]);

            setItem(res)
            setOwnerInfo(res.ownerInfo[0])
        })
    }, []);

    return (

        <Section>
            <Container>
            <h1 className="is-size-3 has-text-weight-bold">{item.name}</h1>
                <Columns>
                    <div className="column is-half">
                        <figure className="image">
                            {item.img ? <img src={item.img} alt={item.name}/>: <img src="https://bulma.io/images/placeholders/128x128.png"/>}
                        </figure>
                    </div>

                    <div className="column is-half">
                        <div class="title is-5">Price: ${item.price}/day</div>
                        <div class="title is-5">User: {ownerInfo.username}</div>
                        {item.city ? <div class="title is-5">Location: {item.city}, {item.state}</div> : <div class="title is-5">Location: See map below</div>}
                        <div class="title is-5">Description: {item.description}</div>
                        <MessageOwnerButton />
                        <br />
                        <br />
                        <ItemRequestForm />

                    </div>

                </Columns>

            </Container>



        </Section>



        // <div class="container">
        //     <div class="title">{item.name}</div>
        //     <div class="columns">
        //         <figure class="image">
        //             <img src={item.img} size={64} alt=""></img>
        //         </figure>
        //     </div>
        //     <div class="column is-half">
        //         <div class="content">

        //         </div>
        //     </div>
        // </div>
    )
}

export default ItemInfo;