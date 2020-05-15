import React from "react";

function Column(props) {
    return (
        <div className={"column" + props.size}>{props.children}</div>
    );
}

export default Column;