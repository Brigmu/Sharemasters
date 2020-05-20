import React from "react";

import { Button } from 'react-bulma-components';

const SuccessButton = (props) => {
    return (
        <p className="control">
            <Button className="is-success is-outlined" {...props}>
                {props.children}
            </Button>
        </p>
    );
};

export default SuccessButton;