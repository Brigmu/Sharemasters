import React from "react";

function CategoryLevel(props) {
    return (
    <div className={"level notification is-" + props.color}>{props.children}</div>
    );
}

export default CategoryLevel;