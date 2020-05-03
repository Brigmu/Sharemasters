import React, {createContext} from 'react';

const UserContext = createContext({
    username: '',
    id: ''
});

export default UserContext;