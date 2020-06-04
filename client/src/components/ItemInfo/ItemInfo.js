import React, { useState, useEffect } from 'react';
import './styles.css';
import { Section, Container, Columns } from "react-bulma-components";
import ItemRequestForm from '../ItemRequestForm/ItemRequestForm';
import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API/API';
import MessageOwnerButton from '../MessageOwnerButton/MessageOwnerButton';
import { useStoreContext } from '../../utils/UserContext/UserContext';

function ItemInfo() {
    const { id } = useParams();
    const [item, setItem] = useState({})
    const [owner, setOwner] = useState({})
    const [state] = useStoreContext();

        useEffect(() => {
        getItem(id)
        .then(res => {
            res = res.data[0]
            // console.log('hi from useeffect in ItemInfo')
            console.log(res);
            setItem(res)
            setOwner(res.ownerId)
        })
    }, []);

    return (

        <Section>
            <Container>
            <h1 className="is-size-3 has-text-weight-bold item-name">{item.name}</h1>
                <Columns>
                    <div className="column is-half">
                        <figure className="item-page-image">
                            {item.img ? <img className="item-page-image" src={item.img} alt={item.name}/>: <img className="item-page" src="https://bulma.io/images/placeholders/128x128.png"/>}
                        </figure>
                    </div>

                    <div className="column is-half">
                        <div className="title is-5">Price: ${item.price}/day</div>
                        {/* <div className="title is-5">User: {owner.username}</div> */}
                        {item.city ? <div className="title is-5">Location: {item.city}, {item.state}</div> : <div className="title is-5">Location: See map below</div>}
                        <div className="title is-5">Description: {item.description}</div>
                        <MessageOwnerButton />
                        <br />
                        <br />
                        {!state.user ? <h2>Please login to rent an item</h2> : state.user.username === owner.username ? <h2>This is your item</h2> : item.pendingRequest || item.isRented ? <p className="not-available-alert">*** This item is rented or an appointment is pending. Check back later or message the owner for more info.</p> :
                        <ItemRequestForm />}

                    </div>

                </Columns>

            </Container>



        </Section>

    )
}

export default ItemInfo;