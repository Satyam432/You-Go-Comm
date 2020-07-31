import { GET_USER } from './authTypes';

const initialState = {};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_USER:
			return { ...state, ...payload };

		default:
			return state;
	}
};

export default authReducer;
