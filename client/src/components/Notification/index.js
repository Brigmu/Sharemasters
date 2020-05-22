import React from "react";

function Notification(props) {
    return (
        <div className={"notification " + props.color}>
            {props.children} 
        </div>
    );
}

export default Notification;