import React from "react";

import { Button } from 'react-bulma-components';

const RejectButton = (props) => {
    return (
        <p className="control">
            <Button className="is-danger is-outlined" {...props}>
                {props.children}
            </Button>
        </p>
    );
};

export default RejectButton;