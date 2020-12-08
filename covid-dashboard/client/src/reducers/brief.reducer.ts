import * as types from '../actions/actionType';

const brief = (state = {}, action: any) => {
	switch (action.type) {
		case types.GET_BRIEF_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};

export default brief
