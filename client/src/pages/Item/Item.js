import React from 'react';
import ItemInfo from '../../components/ItemInfo/ItemInfo';
import Nav from "../../components/Nav/Nav";
import ItemGoogleMaps from "../../components/ItemGoogleMaps/ItemGoogleMaps"
import './styles.css';


function ItemPage() {
    
    return (
        <div>
            <Nav />
            <ItemInfo />
            {/* <ItemRequestForm /> */}
            <ItemGoogleMaps />
        </div>

    )
}

export default ItemPage