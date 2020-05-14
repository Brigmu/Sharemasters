import {createContext} from 'react';

const UserContext = createContext({
    userId: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    location: {
      lat: null,
      long: null
    }
});

export default UserContext;
