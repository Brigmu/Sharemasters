import React, { useState, useEffect } from 'react';
import { Container, Columns } from "react-bulma-components";

import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API/API';

import { GoogleMap, withScriptjs, withGoogleMap, Circle } from 'react-google-maps';

function Map() {
    const [lat, setLat] = useState({})
    const [lng, setLng] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getItem(id, (res) => {
            console.log(res);
            let coordinates = res[0].coordinates
            console.log(coordinates)
            setLat(coordinates.lat)
            setLng(coordinates.lng)
        })
    }, []);


    return (

        

        <GoogleMap
            defaultZoom={14} 
            center={{lat:lat, lng:lng}}
        >
              {true && (
                <Circle
                  center={{lat:lat, lng:lng}}
                  radius={300}
                  options={{strokeColor: "#00d1b2"}}
                />
              )}



        </GoogleMap>
    )
}

const WrapperMap = withScriptjs(withGoogleMap(Map));

export default function ItemMap() {
    return (
        <Container>
            <Columns>
                <div style={{width: "100vw", height: "69vh"}}>
                    <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAH6mTxzDGvX1DWOPmZDMAJazm7tDvuAt0`} 
                    loadingElement={<div style={{ height: "100%"}} />}
                    containerElement={<div style={{ height: "100%"}} />}
                    mapElement={<div style={{ height: "100%"}} />}
                    />
                </div>
            </Columns>
        </Container>
    )
}