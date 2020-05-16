import React, {useContext, useState, useRef, useEffect} from 'react'
import './styles.css';
import Nav from '../../components/Nav/Nav'
// import UserForm from '../../components/UserForm/UserForm';
// import Container from '../../components/Container/Container'
import { useHistory } from 'react-router-dom';
import { useStoreContext } from '../../utils/UserContext/UserContext';
import Field from '../../components/Field/Field';
import DropdownMenu from '../../components/Dropdown/Dropdown';
import ItemImage from '../../components/ItemImage/ItemImage';
import {uploadImageToDB} from '../../utils/API/API';


const ListingPage = (props) => {
    // const user = useContext(UserContext);
    const [state, dispatch] = useStoreContext();
    const [image, setImage] = useState('');
    const history = useHistory();
    // if(!user.id){
    //     history.push('/login');
    // }

    const uploadImage = (e) => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append('upload_preset', 'sharemasters');
        formData.append('file', files);
        console.log(files);
        console.log(formData);

        uploadImageToDB(formData)
        .then(res => {
            console.log(res.data);
            setImage(res.data.secure_url)
        })
        // .then(res => )
        // .then(setLoading(false))
        .catch(err => console.log(err));
    }

    const [category, setCategory] = useState('');
    const [locationPref, setLocationPref] = useState('');

    const itemNameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    // const locationRef = useRef();
    const streetRef = useRef();
    const zipcodeRef = useRef();
    const stateRef = useRef();
    // const locationDropdownRef = useRef();
    // const categoryDropdownRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(category);
        const data = {
            itemName: itemNameRef.current.value,
            description: descriptionRef.current.value,
            fullAddress: `${streetRef.current.value} ${zipcodeRef.current.value} ${stateRef.current.value}`,
            price: priceRef.current.value,
            category: category,
            img: image,
            isRented: false,
            pendingRequest: false,
        }
        console.log(data);

    }

    const handleLocationPref = (locationValue) => {
        setLocationPref(locationValue);
    }
    
    const handleCategoryDropdown = (selectedCategory) => {
        setCategory(selectedCategory);
    }
    return (
        <div className = 'listing-page'>
            <Nav />
            <section className='section'>
                <div className='container notification is-info is-light'>
                    <Field title='Item Name' placeholder='lawnmower' reference={itemNameRef}/>
                    <Field title='Description' placeholder='Tell us about your item' reference={descriptionRef} />
                    <Field title='Price' placeholder='$/day' reference={priceRef}/>
                    <label class="label">Category</label>
                    <DropdownMenu label='Select Category' items={['Electronics', 'Events', 'Home Improvement', 'Kitchen Appliances', 'Miscellaneous', 'Recreation', 'Yardwork']} extraFunction={handleCategoryDropdown}/>
                    <label class="label">Location</label>
                    <DropdownMenu label='Select Location' items={['Use my location', 'Enter a location']} extraFunction={handleLocationPref}/>
                    {locationPref === 'Enter a location' ? <Field placeholder='Street' reference={streetRef} /> : <> </>}
                    {locationPref === 'Enter a location' ? <Field placeholder='Zipcode' reference={zipcodeRef} /> : <> </>}
                    {locationPref === 'Enter a location' ? <Field placeholder='State' reference={stateRef} /> : <> </>}
                    <div class='field is-grouped'>
                    <ItemImage image={image} uploadImage={uploadImage}/>
                    </div>
                    <div class="control">
                        <button class="button is-link" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </section>
            {/* <Container class = 'listing-container'>
            </Container> */}
        </div>
    )
}

export default ListingPage;