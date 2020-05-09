import React from "react";

function Container(props) {
    return (
        <div className="section">{props.children}</div>
    );
}

export default Container;