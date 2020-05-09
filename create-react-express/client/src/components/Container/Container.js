import React from 'react';
import './styles.css';
// import UserForm from '../UserForm/UserForm'
import ItemForm from '../ItemForm/ItemForm';

const Container = (props) => {
    return (
        <div className = {props.class}>
            <h1 className='title'>Post a listing</h1>
            <ItemForm />
        </div>
    )
}

export default Container;