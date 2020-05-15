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

export const postListing = (data) => {
    return axios.post('/api/listing', data);
}

export const loginUser = (userData) => {
    return axios.post('/api/passport/login', userData);
}

export const signupUser = (userData) => {
    return axios.post('/api/passport/signup', userData);
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

export const addRented = (id, itemId) => {
    return axios.put('/api/profile/history/' + id, itemId);
}

export const addOwned = (id, itemId) => {
    return axios.put('/api/profile/owned/' + id, itemId);
}

export const deleteUser = (username) => {
    return axios.delete('api/passport/' + username);
}
