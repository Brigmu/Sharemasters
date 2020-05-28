import React, { useState, useRef } from 'react';
import './styles.css';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import { useStoreContext } from '../../utils/UserContext/UserContext';
import { Container } from "react-bulma-components";
import { postAppointment, renterRequest } from '../../utils/API/API';
import "react-datepicker/dist/react-datepicker.css";

function ItemRequestForm() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (startDate > endDate) {
            return alert('The start date cannot be after the end date!')
        }
        const appointment = {
            itemId: id,
            renterId: "321",
            startDate: startDate,
            endDate: endDate
        }
 
            //submit data to appointments as a request to owner
            postAppointment(appointment)
            .then(res => {
                alert('Your appointment request has been sent to the owner.')
                let renterRequestUpdate = {pendingRequest: true} 
                renterRequest(id, renterRequestUpdate)
            })
    }

    return (
        <Container className="notification">
            <div className="title is-4">Request Rental</div>
            <div className='item-request-form'>
                <div className="date-picker">
                    <span className="title is-6">Start Date</span>
                    <div>
                        <DatePicker showPopperArrow={false} selected={startDate} onChange={date => setStartDate(date)} minDate={Date.now()} placeholderText="Please choose start date.."/> 
                    </div>
                </div> 
                <div className="date-picker">
                    <span className="title is-6">End Date</span>
                    <div>
                        <DatePicker showPopperArrow={false} selected={endDate} onChange={date => setEndDate(date)} minDate={startDate} placeholderText="Please choose end date.." />
                    </div>
                </div>
            </div>

            <div className="field is-grouped button-container">
                <div className="control">
                    <button className="button is-primary" onClick={handleFormSubmit}>Submit</button>
                </div>
            </div>
        </Container>
    )
}

export default ItemRequestForm;
