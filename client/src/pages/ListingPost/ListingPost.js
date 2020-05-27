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
import {uploadImageToDB, postListing, getCoordinates, addOwned} from '../../utils/API/API';


const ListingPage = (props) => {
    // const user = useContext(UserContext);
    const [state, dispatch] = useStoreContext();
    const [image, setImage] = useState('');
    const history = useHistory();
    // merge conflict 1/2
    console.log(state.user);
    if(!state.user){
        history.push('/signup');
    }
    
    // merge conflict 2/2 - i think we need both tho -cna
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
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
    const cityRef = useRef();
    const stateRef = useRef();
    const browserLocationRef = useRef();

    // const locationDropdownRef = useRef();
    // const categoryDropdownRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // let address;
        // let city;
        // let addressState;
        // let zipcode;
        // if(locationPref === 'Use my location') {
        //     address = state.user.address;
        //     city = state.user.city;
        //     addressState = state.user.state;
        //     zipcode = state.user.zipCode
        // } else {
        //     address = streetRef.current.value;
        //     city = cityRef.current.value;
        //     addressState = stateRef.current.value;
        //     zipcode = parseInt(zipcodeRef.current.value)
        // }
        // const data = {
        //     // manually putting in ownId, this will be provided through the usercontext
        //     ownerId: state.user._id,
        //     name: itemNameRef.current.value,
        //     description: descriptionRef.current.value,
        //     category: category,
        //     address: address,
        //     city: city,
        //     state: addressState,
        //     zipCode: zipcode,
        //     fullAddress: `${address} ${city} ${addressState} ${zipcode}`,
        //     coordinates: {
        //         lat: 47.733,
        //         lng: -122.313
        //     },
        //     price: priceRef.current.value,
        //     img: image,
        //     pendingRequest: false,
        //     isRented: false,
        //     active: true,
        // }
        // console.log(data);
        // postListing(data)
        // .then(res => {
        //     console.log(res);
        //     addOwned(`${res.data.ownerId}`, {itemId: res.data._id})
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        // })
        // .catch(err => console.log(err));
        if (locationPref === 'Use my location') {
            const data = {
                ownerId: state.user._id,
                name: itemNameRef.current.value,
                description: descriptionRef.current.value,
                category: category,
                address: "",
                city: "",
                state: "",
                zipCode: "",
                fullAddress: "",
                coordinates: {
                    lat: lat,
                    lng: lng
                },
                price: priceRef.current.value,
                img: image,
                pendingRequest: false,
                isRented: false,
                active: false,
            }
            console.log(data);
            postListing(data)
            .then(res => {
                console.log(res);
                addOwned(`${res.data.ownerId}`, {itemId: res.data._id})
                .then(res => {
                    console.log(res);
                    history.push("/profile");
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
        } else {
        getCoordinates(`${streetRef.current.value} ${zipcodeRef.current.value} ${cityRef.current.value} ${stateRef.current.value}`, (res) => {
            console.log(res)
            const data = {
                ownerId: state.user._id,
                name: itemNameRef.current.value,
                description: descriptionRef.current.value,
                category: category,
                address: streetRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                zipCode: zipcodeRef.current.value,
                fullAddress: `${streetRef.current.value} ${zipcodeRef.current.value} ${cityRef.current.value} ${stateRef.current.value}`,
                coordinates: {
                    lat: res.results[0].geometry.lat.toFixed(3),
                    lng: res.results[0].geometry.lng.toFixed(3)
                },
                price: priceRef.current.value,
                img: image,
                pendingRequest: false,
                isRented: false,
                active: false,
            }
            console.log(data);
            postListing(data)
            .then(res => {
                console.log(res);
                addOwned(`${res.data.ownerId}`, {itemId: res.data._id})
                .then(res => {
                    console.log(res);
                    history.push("/profile");
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
        })}

        // upated with userContext from authentication-pages
        // const data = {
        //     ownerId: state.user._id,
        //     name: itemNameRef.current.value,
        //     description: descriptionRef.current.value,
        //     category: category,
        //     address: streetRef.current.value,
        //     city: cityRef.current.value,
        //     state: stateRef.current.value,
        //     zipCode: zipcodeRef.current.value,
        //     fullAddress: `${streetRef.current.value} ${zipcodeRef.current.value} ${stateRef.current.value}`,
        //     coordinates: {
        //         lat: 47.733,
        //         lng: -122.313
        //     },
        //     price: priceRef.current.value,
        //     img: image,
        //     pendingRequest: false,
        //     isRented: false,
        //     active: true,
        // }
        // console.log(data);
        // postListing(data)
        // .then(res => {
        //     console.log(res);
        //     addOwned(`${res.data.ownerId}`, {itemId: res.data._id})
        //     .then(res => {
        //         console.log(res);
        //         history.push("/profile");
        //     })
        //     .catch(err => console.log(err))
        // })
        // .catch(err => console.log(err));
    }

    const handleLocationPref = (locationValue) => {
        setLocationPref(locationValue);
    }
    
    const handleCategoryDropdown = (selectedCategory) => {
        setCategory(selectedCategory);
    }
    return (
        <div className = 'listing-page'>
            <Nav currentPage ='post'/>
            <section className='section'>
                <div className='container notification is-info is-light'>
                    <Field title='Item Name' placeholder='lawnmower' reference={itemNameRef}/>
                    <Field title='Description' placeholder='Tell us about your item' reference={descriptionRef} />
                    <Field title='Price' placeholder='$/day' reference={priceRef}/>
                    <label className="label">Category</label>
                    <DropdownMenu label='Select Category' items={['Electronics', 'Events', 'Home Improvement', 'Kitchen Appliances', 'Miscellaneous', 'Recreation', 'Yardwork']} extraFunction={handleCategoryDropdown}/>
                    <label className="label">Location</label>
                    <DropdownMenu label='Select Location' items={['Use my location', 'Enter a location']} extraFunction={handleLocationPref}/>
                    {locationPref === 'Use my location' ? navigator.geolocation.getCurrentPosition((data) => {
                        let geolocateLat = data.coords.latitude.toFixed(3)
                        let geolocateLng = data.coords.longitude.toFixed(3)
                        setLat(geolocateLat)
                        setLng(geolocateLng)}) : <> </>}
                    {/* {locationPref === 'Use my location' ? <Field disabled={true} value={state.user.address}/> : <> </>}
                    {locationPref === 'Use my location' ? <Field disabled={true} value={state.user.city}/> : <> </>}
                    {locationPref === 'Use my location' ? <Field disabled={true} value={state.user.state}/> : <> </>}
                    {locationPref === 'Use my location' ? <Field disabled={true} value={state.user.zipCode}/> : <> </>} */}
                    {locationPref === 'Enter a location' ? <Field placeholder='Street' reference={streetRef} /> : <> </>}
                    {locationPref === 'Enter a location' ? <Field placeholder='City' reference={cityRef} /> : <> </>}
                    {locationPref === 'Enter a location' ? <Field placeholder='State' reference={stateRef} maxlength={2}/> : <> </>}
                    {locationPref === 'Enter a location' ? <Field placeholder='Zipcode' reference={zipcodeRef} maxlength={5}/> : <> </>}
                    <div className='field'>
                        <label className="label">Item Image</label>
                        <ItemImage image={image} uploadImage={uploadImage}/>
                    </div>
                    <div className="control">
                        <button className="button is-link" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </section>
            {/* <Container class = 'listing-container'>
            </Container> */}
        </div>
    )
}

export default ListingPage;