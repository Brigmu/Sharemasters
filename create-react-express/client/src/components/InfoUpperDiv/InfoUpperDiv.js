import React, { useState, useEffect } from 'react';
// import RentThisButton from '../RentThisButton/RentThisButton';
import ItemPageImage from '../ItemPageImage/ItemPageImage';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API/API';

//ui components
import Section from "../../components/Section";
import Container from "../../components/Container";
import Notification from "../../components/Notification";
import Columns from '../Columns/Columns';
import Column from '../Column';



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
        <div >
            <Section>
                <Container>
                    <Notification>
                        <div class="section">
                            <p className="title">Item Name</p>
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt =''></img>
                            </figure>
                            <br></br>
                            <div className="content">
                                    <p className="title is-5">Owner: {item.owner_id}</p>
                                    <p className="title is-5">Location: {item.location}</p>
                                    <div className="field is-grouped">
                                        <p className="control">
                                            <button className="button is-primary" onClick={HandleSubmitButton}>
                                                Rent This!
                                            </button>
                                        </p>
                                        <p className="control">
                                            <button className="button is-primary is-light" onClick={HandleSubmitButton}>
                                                Message the Owner
                                            </button>
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </Notification>
                </Container>
                
            </Section>
            {/* <div className="upper-div">
                <ItemPageImage>

                </ItemPageImage>
            </div>
            <div className="upper-div">
                <p>Owner: {item.owner_id}</p>
                <p>Location: </p>
                <button className="btn waves-effect waves-light red lighten-2" onClick={HandleSubmitButton}>
                    Rent This!
                </button>
                <button className="grey lighten-4" onClick={HandleSubmitButton}>
                    Message the Owner
                </button>
            </div> */}
        </div>
    )
}

export default ItemUpperDiv;