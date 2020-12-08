import * as types from '../actions/actionType';

const targetCountry = (state = {}, action: any) => {
	switch (action.type) {
		case types.SET_TARGET_COUNTRY:
			return action.payload;
		default:
			return state;
	}
};

export default targetCountry;
