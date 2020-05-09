import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
            defaultZoom={10} 
            defaultCenter={{lat:40.741895, lng:-73.989308}}
            />
    )
}

const WrapperMap = withScriptjs(withGoogleMap(Map));

export default function ItemMap() {
    return (
        <div style={{width: "69vw", height: "69vh"}}>
            <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAH6mTxzDGvX1DWOPmZDMAJazm7tDvuAt0`} 
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "100%"}} />}
            mapElement={<div style={{ height: "100%"}} />}
            />
        </div>
    )
}