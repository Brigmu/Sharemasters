import axios from 'axios';

export const getItem = (id) => {
    fetch('/api/items/' + id)
    .then(response => response.json())
    .catch(err => console.log(err));
    // return axios.get('/api/items/' + id)
}

export const getUserData = (id, cb) => {
    fetch(`/api/user/${id}`)
    .then(response => response.json())
    .then(data => {
        cb(data);
    })
    .catch(err => console.log(err));
}