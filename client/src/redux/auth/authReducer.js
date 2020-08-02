import { GET_USER } from './authTypes';

const initialState = {
	isAuthenticated: false,
	user: {}
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_USER:
			return { ...state, isAuthenticated: true, user: payload };

		default:
			return state;
	}
};

export default authReducer;
