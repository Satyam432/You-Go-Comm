import {
    GET_USER,
    GET_USER_FAILED,
    USER_INCOMPLETE_DETAILS,
    USER_COMPLETED_DETAILS
} from './authTypes';

export const getUser = (userId, imageUrl) => {
    return {
        type: GET_USER,
        payload: {
            userId,
            imageUrl
        }
    };
};

export const getUserFailed = () => {
    return {
        type: GET_USER_FAILED
    };
};

export const incompleteUserDetails = () => {
    return {
        type: USER_INCOMPLETE_DETAILS
    };
};

export const completedUserDetails = () => {
    return {
        type: USER_COMPLETED_DETAILS
    };
};
