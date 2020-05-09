import React, { useRef } from 'react'
import './styles.css';
import ItemImage from '../ItemImage/ItemImage'
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import { postListing } from '../../utils/API/API';

const ItemForm = (props) => {
    const itemNameRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();
    const dropdownRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            itemName: itemNameRef.current.value,
            location: locationRef.current.value,
            price: priceRef.current.value,
            category: dropdownRef.current.value,
            is_rented: false,
            pending: [],
        }

        console.log(data);

        // postListing(data)
        // .then(res => {

        // })
        // .catch(err => console.log(err));
    }

    return (
        <form >
            <div className='item-form'>
                <input ref={itemNameRef} placeholder='Item Name' className = 'item-input'></input>
                <CategoryDropdown dropdownRef={dropdownRef}/>
                <ItemImage />
                <input ref={locationRef} placeholder='Location' className = 'item-input'></input>
                <input type='number' ref={priceRef} placeholder='Price' className = 'item-input'></input>
                <button type='submit' onClick={handleSubmit}>Post</button>
            </div>
        </form>
    )
}

export default ItemForm;