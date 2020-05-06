import axios from 'axios';


//get data for currently logged in user
export const getUserData = (cb) => {
    fetch(`/api/passport/user_data`)
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