import * as types from '../actions/actionType';

const targetTimeseriesCountry = (state = {}, action: any) => {
	switch (action.type) {
		case types.SET_TARGET_TIMESERIES_COUNTRY:
			return action.payload;
		default:
			return state;
	}
};

export default targetTimeseriesCountry;
