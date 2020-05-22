import React from "react";

function Section(props) {
    return (
    <section className="section">{props.children}</section>
    );
}

export default Section;