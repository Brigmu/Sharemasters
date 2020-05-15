import axios from 'axios';


//get data for currently logged in user
export const getUserData = () => {
    fetch(`/api/passport/user_data`)
    .then(response => {
        console.log(response);
        response.json();
    })
    // return axios.get('/api/passport/user_data');
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
    return axios.post('/api/listing', data);
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