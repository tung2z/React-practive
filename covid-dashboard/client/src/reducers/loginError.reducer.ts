import { act } from 'react-dom/test-utils';
import * as types from '../actions/actionType';

const initialState = '';

const loginError = (state = initialState, action: any) => {
	switch (action.type) {
		case types.GET_LOGIN_ERROR:
			return action.payload;
		case types.GET_LOGIN_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};

export default loginError;
