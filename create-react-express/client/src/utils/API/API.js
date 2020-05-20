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

export const getItem = (id, cb) => {
    fetch('/api/items/' + id)
    .then(response => response.json())
    .then(data => {
        cb(data);
    })
    .catch(err => console.log(err));
    // return axios.get('/api/items/' + id)
}

export const renterRequest = (renterId, id ) => {
    return axios.put('/api/items/' + id)
}

export const postAppointment = (data) => {
    return axios.post('/api/appointments', data)
}



// export const getUserData = (id, cb) => {
//     fetch(`/api/user/${id}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         cb(data);
//     })
//     .catch(err => console.log(err));
// }

export const postListing = (data) => {
    return axios.post('http://localhost:3001/api/items', data);
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
    return axios.put(`/api.items/rentstatus/${id}`, status);
}

export const declineRental = (id, status) => {
    return axios.put(`/api.items/pendingstatus/${id}`, status);
}

export const returnItem = (id, status) => {
    return axios.put(`/api/items/rentstatus/${id}`, status)
}

export const confirmReturn = (id, status) => {
    return axios.put(`/api/items/rentstatus/${id}`, status)
}