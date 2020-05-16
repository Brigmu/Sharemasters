import React from "react";

import { Button } from 'react-bulma-components';

const ReturnButton = (props) => {
    return (
        <p className="control">
            <Button className="is-primary" {...props}>
                {props.children}
            </Button>
        </p>
    );
};

export default ReturnButton;