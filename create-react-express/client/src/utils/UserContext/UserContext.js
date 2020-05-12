import {createContext} from 'react';

const UserContext = createContext({
    userId: '',
    username: ''
});

export default UserContext;