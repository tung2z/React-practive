import * as types from '../actions/actionType';

const timeseries = (state = [], action: any) => {
	switch (action.type) {
		case types.GET_TIMESERIES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};

export default timeseries;
