import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API/API';
import ItemGooglemap from '../ItemGoogleMaps/ItemGoogleMaps'
import Section from "../../components/Section";
import Container from "../../components/Container";
import Notification from "../../components/Notification";


function ItemMiddleDiv() {

    const [item, setItem] = useState({})

    const { id } = useParams();
    useEffect(() => {
        getItem(id, (res) => {
            console.log('hi from useEffect/getItem')
            console.log(res)
            setItem(res)
            })
    }, []);


    const HandleSubmitButton = function (event) {
        event.preventDefault();
    }

    return (

            <div className="middle-div">
                <Section>
                    <Container>
                        <Notification>
                            <p>Description: { item.description } ---- Tempor exercitation sunt id magna elit enim non mollit occaecat ad amet amet nostrud. 
                                In id culpa excepteur cupidatat. Et ex laboris quis non fugiat ad adipisicing 
                                laborum pariatur dolore pariatur cillum non.</p>
                            <br></br>
                            <ItemGooglemap />
                        </Notification>
                    </Container>
                </Section>
            </div>


    )

}


export default ItemMiddleDiv 