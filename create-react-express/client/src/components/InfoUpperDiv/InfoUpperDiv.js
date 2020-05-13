import React, { useState, useEffect } from 'react';
// import RentThisButton from '../RentThisButton/RentThisButton';
// import ItemPageImage from '../ItemPageImage/ItemPageImage';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API/API';


function ItemUpperDiv() {
    const [item, setItem] = useState({})

    const { id } = useParams();

    useEffect(() => {
        getItem(id, (res) => {
            console.log('hi from useEffect/getItem')
            console.log(res);
            setItem(res)
            })
    }, []);

    
    const HandleSubmitButton = function (event) {
        event.preventDefault();
    }


    return (
        <div className="columns upper-div">
            <div className="column">
                <figure className="upper-inner-div image-div image ">
                    <img className="itempageimage" src={item.image_url} alt={item.name} />

                </figure>
            </div>
            <div className="column upper-inner-div item-info">
                <div className="basic-item-info">
                    <h1>{ item.name }</h1>
                    <h1>PRICE</h1>
                    <h2>Owner: {item.owner_id}</h2>
                    <p>Location: Here</p>
                </div>
                <div className="buttons-div">
                    <button className="button is-success half-button" onClick={HandleSubmitButton}>
                        Rent This!
                    </button>
                    <button className="button is-info half-button" onClick={HandleSubmitButton}>
                        Message Owner
                    </button>
                </div>

                <div className="buttons-div">
                    <button className="button is-danger half-button" onClick={HandleSubmitButton}>
                        Save
                    </button>
                    <button className="button is-warning half-button" onClick={HandleSubmitButton}>
                        Alert
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemUpperDiv;