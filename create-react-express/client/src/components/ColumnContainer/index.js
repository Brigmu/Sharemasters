import React from "react";

function ColumnContainer(props) {
    return (
        <div className="columns">{props.children}</div>
    );
}

export default ColumnContainer;