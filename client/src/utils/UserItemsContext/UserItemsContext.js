import React, { createContext, useReducer, useContext } from "react";
import {
  SET_RENTALS,
  CLEAR_RENTALS,
  SET_OWNED,
  CLEAR_OWNED
} from "./UserItemsActions";

const UserItemsContext = createContext();
const { Provider } = UserItemsContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_RENTALS:
            return {
                ...state,
                rentals: action.rentals
            };
        case CLEAR_RENTALS:
            return {
                ...state,
                rentals: []
            }
        case SET_OWNED:
            return {
                ...state,
                owned: action.owned
            };
        case CLEAR_OWNED:
            return {
                ...state,
                owned: []
            }
    }
}

const UserItemsProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        rentals: [],
        owned: []
    });

    return <Provider value={[state, dispatch]} {...props} />;
}

const useUserItemsContext = () => {
    return useContext(UserItemsContext);
};

export { UserItemsProvider, useUserItemsContext};
