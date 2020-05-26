import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, Circle } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
            defaultZoom={15} 
            defaultCenter={{lat:40.741895, lng:-73.989308}}
        >

            {/* <Marker
                position={{
                    lat:40.741895, lng:-73.989308
                }}
              /> */}
              {true && (
                <Circle
                  defaultCenter={{
                    lat:40.741, lng:-73.989
                  }}
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
        <div style={{width: "69vw", height: "69vh"}}>
            <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAH6mTxzDGvX1DWOPmZDMAJazm7tDvuAt0`} 
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "100%"}} />}
            mapElement={<div style={{ height: "100%"}} />}
            />
        </div>
    )
}