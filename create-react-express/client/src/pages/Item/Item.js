import React from 'react';
// import { useParams } from 'react-router-dom';
// import API from '../../utils/API';
import ItemInfo from '../../components/ItemInfo/ItemInfo';
import ItemRequestForm from '../../components/ItemRequestForm/ItemRequestForm';
import Nav from "../../components/Nav/Nav";
import ItemGoogleMaps from "../../components/ItemGoogleMaps/ItemGoogleMaps"
// import ItemUpperDiv from '../../components/InfoUpperDiv/InfoUpperDiv';
// import ItemMiddleDiv from '../../components/InfoMiddleDiv/InfoMiddleDiv';
import './styles.css';


function ItemPage() {
    
    return (
        <div>
            <Nav />
            <ItemInfo />
            <ItemRequestForm />
            <ItemGoogleMaps />
        </div>

    )
}

export default ItemPage