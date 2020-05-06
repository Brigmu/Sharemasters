import axios from 'axios';

export const getUserData = (id, cb) => {
    fetch(`/api/user/${id}`)
    .then(response => response.json())
    .then(data => {
        cb(data);
    })
    .catch(err => console.log(err));
}

export const loginUser = (userData) => {
    return axios.post('/api/passport/login', userData)
}

export const signupUser = (userData) => {
    return axios.post('/api/passport/signup', userData)
}