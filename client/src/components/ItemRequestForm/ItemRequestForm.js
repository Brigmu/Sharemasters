import React, { useState, useRef } from 'react';
import './styles.css';
import DatePicker from 'react-datepicker';
import { useParams, useHistory } from 'react-router-dom';
import { useStoreContext } from '../../utils/UserContext/UserContext';
import { Container } from "react-bulma-components";
import { postAppointment, renterRequest } from '../../utils/API/API';
import "react-datepicker/dist/react-datepicker.css";

function ItemRequestForm() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [appointmentInfo, setAppointmentInfo] = useState({});
    const history = useHistory();



    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (startDate > endDate) {
            return alert('The start date cannot be after the end date!')
        }
        const formattedStartDate = `${startDate.getMonth()}-${startDate.getDate()}-${startDate.getFullYear()}`
        const formattedEndDate = `${endDate.getMonth()}-${endDate.getDate()}-${endDate.getFullYear()}`
        const appointment = {
            itemId: id,
            // renter id will be the userId from user context for this field
            
            // previous code before merge
            renterId: state.user._id,

            startDate: formattedStartDate,
            endDate: formattedEndDate
        }
 
            //submit data to appointments as a request to owner
            postAppointment(appointment)
            .then(res => {
                const appointmentId = res.data._id;
                renterRequest({renterUserId: state.user._id, pendingRequest: true, $push: {currentAppointment: appointmentId}}, id)
                .then(res => console.log(res))
                .catch(err => console.log(err));
                alert('Request sent')
                history.push('/listings');
            })
            .catch(err => console.log(err));
            
            


    }


    // const handleCancel = (e) => {
    //     e.preventDefault();
    //     rentalCancel(id);

    // }

    // const handleFormCancel = (e) => {
    //     startDateRef.current.value = "";
    //     endDateRef.current.value = "";
    // }

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
