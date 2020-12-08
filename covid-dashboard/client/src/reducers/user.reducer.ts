import * as types from '../actions/actionType';
const initialState = {};

const user = (state = initialState, action: any) => {
	switch (action.type) {
		case types.GET_USER_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};

export default user