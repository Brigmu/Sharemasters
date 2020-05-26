import React, { createContext, useReducer, useContext } from "react";
import {
  SET_USER,
  CLEAR_USER
} from "./UserActions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case CLEAR_USER:
            return {
                ...state,
                user: {
                    userId: "",
                    id: "",
                    username: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    coordinates: {
                        lat: null,
                        lng: null
                    },
                    address: "",
                    city: "",
                    state: "",
                    zipCode: null,
                    icon: "octopus.png"
                }
            }
        default : 
            return;
    }
}

const UserProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        userId: "",
        id: "",
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        coordinates: {
            lat: null,
            lng: null
        },
        address: "",
        city: "",
        state: "",
        zipCode: null,
        icon: "octopus.png"
    });

    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { UserProvider, useStoreContext};
