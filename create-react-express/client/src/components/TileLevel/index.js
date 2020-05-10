import React from "react";

function TileLevel(props) {
    return (
        <div className={"column is-" + props.column}>{props.children}</div>
    );
}

export default TileLevel;