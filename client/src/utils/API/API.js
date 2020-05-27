import axios from 'axios';


//get username and id for currently logged in user
export const getCurrentUser = () => {
    return axios.get('/api/passport/user_data');
}

//get profile data for matching userId
    // owned and rented are arrays of Item Objects
export const getProfile = (id) => {
    return axios.get('api/profile/' + id);
}

//get profile data for all users 
    // owned and rented are arrays of Item ObjectId
export const getAllProfiles = () => {
    return axios.get('api/profile/users');
}

export const getAllItems = () => {
    return axios.get('/api/items/all');
}

export const getAllUnrentedItems = () => {
    return axios.get('/api/items/all/unrented');
}

export const getItem = (id) => {
    return axios.get('/api/items/' + id)
}

export const renterRequest = (id, appointmentId) => {
    return axios.put('http://localhost:3001/api/items/' + id, appointmentId)
}

export const rentalApprove = (id) => {
    return axios.put('http://localhost:3001/api/items/' + id + '/rental-approve')
}

export const rentalCancel = (id) => {
    return axios.put('/api/appointment/cancel/' + id + '/rental-cancel')
}

// export const ownerCancel = (renterId, id ) => {
//     return axios.put('/api/appointment/cancel/' + id)
// }

// Appointment APIs
export const postAppointment = (data) => {
    return axios.post('/api/appointments', data)
    // .then(res => {
    //     const appointmentId = res.data._id
    //     return axios.put('/api/items/' + id + appointmentId)
    // })
    // .then(response => response.json())
    // .then(res => {
    //     cb(res);
    // })
    .catch(err => console.log(err));
}

export const removeAppointment = (itemId, appointmentData) => {
    return axios.put(`/api/items/appointments/${itemId}`, appointmentData)
}

export const postListing = (data) => {
    return axios.post('/api/items', data);
}

export const getCoordinates = (fullAddress, cb) => {
    fetch('https://api.opencagedata.com/geocode/v1/json?q=' + fullAddress + '&key=f8dc0563994c4035af8cbb25cf96dce7&language=en&pretty=1')
    .then(response => response.json())
    .then(data => {
        cb(data);
    })
    .catch(err => console.log(err));
}

export const loginUser = (userData) => {
    return axios.post('/api/passport/login', userData);
}

export const signupUser = (userData) => {
    return axios.post('/api/passport/signup', userData)
}

export const uploadImageToDB = (formData) => {
    return axios.post('https://api.cloudinary.com/v1_1/djz8ibfox/image/upload', formData)
}

export const logoutUser = () => {
    return axios.get('/api/passport/logout');
}

export const createProfile = (userData) => {
    return axios.post('/api/profile', userData);
}

export const updateProfile = (id, userData) => {
    return axios.put('/api/profile/' + id, userData);
}

export const addRental = (id, itemId) => {
    return axios.put('/api/profile/rentals/' + id, itemId);
}

export const removeRental = (id, itemId) => {
    return axios.put(`/api/profile/rentals/remove/${id}`, itemId)
}

export const addRentalHistory = (id, itemId) => {
    return axios.put('/api/profile/history/' + id, itemId);
}

export const addOwned = (id, itemId) => {
    return axios.put('/api/profile/owned/' + id, itemId);
}

export const deleteUser = (username) => {
    return axios.delete('api/passport/' + username);
}

export const approveRental = (id, status) => {
    return axios.put(`/api/items/rentstatus/${id}`, status);
}

export const declineRental = (id, status) => {
    return axios.put(`/api/items/pendingstatus/${id}`, status);
}

export const returnItem = (id, status) => {
    return axios.put(`/api/items/rentstatus/${id}`, status)
}

export const confirmReturn = (id, status) => {
    return axios.put(`/api/items/rentstatus/${id}`, status)
}