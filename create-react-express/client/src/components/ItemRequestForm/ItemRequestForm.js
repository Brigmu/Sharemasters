import React, { useState, useRef } from 'react';
import './styles.css';
import Field from '../../components/Field/Field';
// import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import { Section, Container, Tile, Heading, Columns } from "react-bulma-components";
import { updateItem } from '../../utils/API/API';

function ItemRequestForm() {
    const { id } = useParams();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const appointment = {
            itemId: id,
            renterId: null,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value
        }
        console.log(appointment);

        //submit data to appointments as a request to owner
        //update item pendingRequest to true
    }

    const handleFormCancel = (e) => {
        console.log('clear form');
    }

    return (
        <div class="notification">
            <div class="title is-5">Request Rental</div>
            <div className='item-request-form'>
                <Field title='Start Date' placeholder='01/01/202001' reference={startDateRef} />
                <Field title='End Date' placeholder='01/30/2020' reference={endDateRef} />
            </div>
            <div class="field is-grouped button-container">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light is-outlined">Cancel</button>
                </div>
            </div>
        </div>

    )
}

export default ItemRequestForm;