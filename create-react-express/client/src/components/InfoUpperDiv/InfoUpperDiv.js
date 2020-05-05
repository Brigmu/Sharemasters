import React, { useState, useEffect } from 'react';
// import RentThisButton from '../RentThisButton/RentThisButton';
import ItemPageImage from '../ItemPageImage/ItemPageImage';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../utils/API/API';


function ItemUpperDiv() {
    const [item, setItem] = useState({})

    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        API.getItem(id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, []);

    
    const HandleSubmitButton = function (event) {
        event.preventDefault();
    }


    return (
        <div >
            <div className="upper-div">
                <ItemPageImage>

                </ItemPageImage>
            </div>
            <div className="upper-div">
                <p>Owner: {item.name}</p>
                <p>Location: </p>
                <button className="btn waves-effect waves-light red lighten-2" onClick={HandleSubmitButton}>
                    Rent This!
                </button>
                <button className="grey lighten-4" onClick={HandleSubmitButton}>
                    Message the Owner
                </button>
            </div>
        </div>
    )
}

export default ItemUpperDiv;