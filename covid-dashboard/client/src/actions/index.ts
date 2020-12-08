import * as types from './actionType';

export const getUserRequest = (payload: any) => ({
	type: types.GET_USER_REQUEST,
	payload,
});

export const getBriefRequest = () => ({
	type: types.GET_BRIEF_REQUEST,
});

export const getBriefSuccess = (payload: any) => ({
	type: types.GET_BRIEF_SUCCESS,
	payload,
});

export const getCountriesRequest = () => ({
	type: types.GET_COUNTRIES_REQUEST,
});

export const getCountriesSuccess = (payload: any) => ({
	type: types.GET_COUNTRIES_SUCCESS,
	payload,
});

export const setTargetCountry = (payload: any) => ({
	type: types.SET_TARGET_COUNTRY,
	payload
})

export const getTimeseriesRequest = () => ({
	type: types.GET_TIMESERIES_REQUEST,
});

export const getTimeseriesSuccess = (payload: any) => ({
	type: types.GET_TIMESERIES_SUCCESS,
	payload,
});

export const setTargetTimeseriesCountry = (payload: any) => ({
	type: types.SET_TARGET_TIMESERIES_COUNTRY,
	payload
})
