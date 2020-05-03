export const getUserData = (id, cb) => {
    fetch(`/api/user/${id}`)
    .then(response => response.json())
    .then(data => {
        cb(data);
    })
    .catch(err => console.log(err));
}