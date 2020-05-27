import React, { useState, useRef } from 'react';
import './styles.css';
import "react-datepicker/dist/react-datepicker.css";
import Field from '../../components/Field/Field';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import { Section, Container, Tile, Heading, Columns } from "react-bulma-components";
import { updateItem, postAppointment, renterRequest } from '../../utils/API/API';
import { useStoreContext } from '../../utils/UserContext/UserContext';

function ItemRequestForm() {
    const { id } = useParams();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [appointmentInfo, setAppointmentInfo] = useState({});
    const [state, dispatch] = useStoreContext();


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const appointment = {
            itemId: id,
            // renter id will be the userId from user context for this field
            
            // previous code before merge
            renterId: state.user._id,
            // startDate: startDateRef.current.value,
            // endDate: endDateRef.current.value
            // renterId: "5ec24cc7c7e382486c6ff129",
            startDate: startDate,
            endDate: endDate
        }
        console.log(appointment);

        
        
        //submit data to appointments as a request to owner
        postAppointment(appointment)
        .then(res => {
            const appointmentId = res.data._id;
            console.log(appointmentId);
            renterRequest({renterUserId: state.user._id, pendingRequest: true, $push: {currentAppointment: appointmentId}}, id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        })
        //update item pendingRequest to true
        // first parameter of this function needs to be the userId from the usercontext

        


    }
    // // cancel function
    // const handleFormCancel = (e) => {
    //     console.log('clear form');
    // }

    return (
        // <div class="notification">
        //     <div class="title is-5">Request Rental</div>
        //     <div className='item-request-form'>
        //         <Field title='Start Date' placeholder='01/01/2020' reference={startDateRef} />
        //         <Field title='End Date' placeholder='01/30/2020' reference={endDateRef} />
        //     </div>
        //     <div class="field is-grouped button-container">
        //         <div class="control">
        //             <button class="button is-link" onClick={handleFormSubmit}>Submit</button>
        //         </div>
        //         <div class="control">
        //             <button class="button is-link is-light is-outlined">Cancel</button>
        //         </div>
        //     </div>
        // </div>

        <Container className="notification">
        <div className="title is-4">Request Rental</div>
        <div className='item-request-form'>
            <div className="date-picker">
                <span className="title is-6">Start Date</span>
                <div>
                    <DatePicker showPopperArrow={false} selected={startDate} onChange={date => setStartDate(date)} placeholderText="Please choose start date.."/> 
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
            {/* <div className="control">
                <button className="button is-warning is-light" onClick={handleFormCancel}>Cancel</button>
            </div> */}
        </div>
        </Container>

    )
}

export default ItemRequestForm;