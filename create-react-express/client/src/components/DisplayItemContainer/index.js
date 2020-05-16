import React from "react";

import { Section, Container, Tabs, } from 'react-bulma-components';
import ProfileItemContent from "../ProfileItemContainer";

//put buttons in ProfileItemContent children
// Rental Buttons
import ReturnButton from "../ReturnButton";
import MessageOwnerButton from "../MessageOwnerButton";

// Listings and Return Buttons 
// Accept/Reject for Listings and Confirm/Report for Returns
import SuccessButton from "../SuccessButton";
import RejectButton from "../RejectButton";

const DisplayItemsContainer = (props) => {

    //handling the items
    return (
        <Section>
            <Container>
                <div className="title">{props.title}</div>
                {/* map current rentals*/}
            </Container>
        </Section>
    );
};

export default DisplayItemsContainer;