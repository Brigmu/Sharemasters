import React from "react";

function TileContainer(props) {
    return ( 
    <div class="columns tile is-ancestor">{props.children}</div>
    );
}

export default TileContainer;