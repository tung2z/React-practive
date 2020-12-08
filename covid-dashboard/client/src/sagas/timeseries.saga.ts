import { getTimeseriesSuccess, setTargetTimeseriesCountry } from '../actions';
import * as types from '../actions/actionType';
import axios from 'axios';
import { HOST } from '../utils';
import { call, put, select, takeLatest } from 'redux-saga/effects';

const getTimeseries = (token: string) =>
	axios({
		method: 'get',
		url: `${HOST}/api/timeseries`,
		headers: {
			Authorization: token,
		},
	});

function* getTimeseriesAsync() {
	const token = yield select(state => state.user.token);
	try {
		const data = yield call(getTimeseries, token);
		yield put(getTimeseriesSuccess(data.data.timeseries));
		const targetTimeseriesCountry = data.data.timeseries.find(
			(country: any) => country.countryregion === 'Vietnam'
		);
		yield put(setTargetTimeseriesCountry(targetTimeseriesCountry));
	} catch (error) {
		console.log(error);
	}
}

function* workerTimeseries() {
	yield takeLatest(types.GET_TIMESERIES_REQUEST, getTimeseriesAsync);
}

export default workerTimeseries;
