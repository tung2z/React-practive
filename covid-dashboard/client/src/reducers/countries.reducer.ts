import * as types from '../actions/actionType';

const countries = (state = [], action: any) => {
	switch (action.type) {
		case types.GET_COUNTRIES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};

export default countries;
