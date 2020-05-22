import React, { useState, useRef, useEffect} from 'react';
import './styles.css';
import Field from '../../components/Field/Field';
// import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import { Section, Container, Tile, Heading, Columns } from "react-bulma-components";
import { updateItem, postAppointment, renterRequest, getItem} from '../../utils/API/API';
import { useStoreContext } from '../../utils/UserContext/UserContext';

function ItemRequestForm() {
    const [item, setItem] = useState({})
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // console.log(state.user._id);
    console.log(id);

    useEffect(() => {
        getItem(id)
        .then(res => {
            console.log('hi from useEffect/getItem')
            console.log(res.data);
            setItem(res.data)
        })
            
    }, []);


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const appointment = {
            itemId: id,
            // renter id will be the userId from user context for this field
            renterId: state.user._id,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value
        }
        console.log(appointment);

        
        
        //submit data to appointments as a request to owner
        postAppointment(appointment);
        //update item pendingRequest to true
        // first parameter of this function needs to be the userId from the usercontext
        renterRequest({renterUserId: state.user._id, pendingRequest: true}, id)
        .then(res => console.log(res))
        .catch(err => console.log(err));


    }

    const handleFormCancel = (e) => {
        startDateRef.current.value = "";
        endDateRef.current.value = "";
    }

    return (
        <>
        {!state.user ? <div>Please login to rent this item</div> : 
        state.user._id == item.ownerId ? <div>This is your item </div> : <div className="notification">
            <div className="title is-5">Request Rental</div>
            <div className='item-request-form'>
                <Field title='Start Date' placeholder='01/01/2020' reference={startDateRef} />
                <Field title='End Date' placeholder='01/30/2020' reference={endDateRef} />
            </div>
            <div className="field is-grouped button-container">
                <div className="control">
                    <button className="button is-link" onClick={handleFormSubmit}>Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light is-outlined">Cancel</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default ItemRequestForm;