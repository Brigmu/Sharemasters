import React, { useState, useEffect } from 'react';
import './styles.css';
import Nav from '../../components/Nav/Nav';
import Section from '../../components/Section';
import Columns from '../../components/Columns/Columns';
import Column from '../../components/Column/Column';
import {Button} from 'react-bulma-components';

const RentalConfirmation = (props) => {
    //get user context. filter of items where pending is false.

    //for each item id in user owned, make API call to get item info, add it to total rentals state, then filter and set filtered to pending state
    const [allItems, setAllItems] = useState([]);
    const [pendingItems, setPendingItems] = useState([]);

    const init = () => {
        let testItems = [
            {
                id: 1,
                itemName: 'Lawnmower',
                total: '50',
                start_date: '1/1/2020',
                return_date: '1/3/2020'
            },
            {
                id: 2,
                itemName: 'Wheelbarrow',
                total: '25',
                start_date: '6/10/2020',
                return_date: '6/12/2020'
            }
        ]
        setPendingItems(testItems);
    }

    const filterPendingItems = (array) => {
        let filteredItems = array.filter(item => {
            return (item.pending)
        })
        setPendingItems(filteredItems);
    }

    const filterOffItem = (id, array) => {
        let filteredItems = array.filter(item => {
            return (item.id !== id);
        })
        setPendingItems(filteredItems);
    }

    const handleConfirm = (e) => {
        console.log(e.target);
        const itemId = parseInt(e.target.getAttribute('data-id'));
        filterOffItem(itemId, pendingItems);
    }

    const handleDecline = (e) => {
        console.log(e.target);
        const itemId = parseInt(e.target.getAttribute('data-id'));
        filterOffItem(itemId, pendingItems);
    }

    useEffect(()=>{
        init()
    }, [])
    return(
        <div>
            <Nav />
            <Section>
                <Columns>
                    <Column size='is-12'>
                        <div className='notification is-light has-text-centered'>
                            <h1 className='is-size-3'>Pending Offers</h1>
                        </div>
                        {pendingItems.length !== 0 ? pendingItems.map(item => (
                            <div key={item.id} className='notification is-info is-clearfix'>
                            <div className='notification is-link'>
                                <h2 className='is-size-6 pending-item-info is-pulled-left'>Item Name: {item.itemName}</h2>
                                    {/* <h2 className='is-size-6 pending-item-info '>Offering User: <a>{item.username}</a></h2> */}
                                <h2 className='is-size-6 pending-item-info is-pulled-right'>Return Date: {item.return_date}</h2>
                                <h2 className='is-size-6 pending-item-info'>Start Date: {item.start_date}</h2>
                                <h2 className='is-size-6 pending-item-info '>Total: {`$${item.total}`}</h2>
                            </div>
                            <Button data-id={item.id} onClick={handleDecline} className='is-pulled-right' color='danger'>Deny</Button>
                            <Button data-id={item.id} onClick={handleConfirm} className='is-pulled-right' color='success'>Confirm</Button>
                        </div>
                        )) : <div className='notification is-warning has-text-centered'><h2 className='is-size-6'>No pending item rentals</h2></div>}
                    </Column>
                </Columns>
            </Section>
        </div>
    )
}

export default RentalConfirmation;