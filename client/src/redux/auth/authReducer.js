import {
    GET_USER,
    GET_USER_FAILED,
    USER_INCOMPLETE_DETAILS,
    USER_COMPLETED_DETAILS
} from './authTypes';

const initialState = {
    isAuthenticated: false,
    user: {},
    incompleteDetails: false
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER:
            return { ...state, isAuthenticated: true, user: payload };

        case GET_USER_FAILED:
            return initialState;

        case USER_INCOMPLETE_DETAILS:
            return {
                ...state,
                incompleteDetails: true
            };

        case USER_COMPLETED_DETAILS:
            return {
                ...state,
                incompleteDetails: false
            };

        default:
            return state;
    }
};

export default authReducer;
