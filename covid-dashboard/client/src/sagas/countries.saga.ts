import { getCountriesSuccess, setTargetCountry } from '../actions';
import * as types from '../actions/actionType';
import axios from 'axios';
import { HOST } from '../utils';
import { call, put, select, takeLatest } from 'redux-saga/effects';

const getCountries = (token: string) =>
	axios({
		method: 'get',
		url: `${HOST}/api/countries`,
		headers: {
			Authorization: token,
		},
	});

function* getCountriesAsync() {
	const token = yield select(state => state.user.token);
	try {
		const data = yield call(getCountries, token);
		yield put(getCountriesSuccess(data.data.countries));
		const targetCountry = data.data.countries.find(
			(country: any) => country.countryregion === 'Vietnam'
		);
		yield put(setTargetCountry(targetCountry));
	} catch (error) {
		console.log(error);
	}
}

function* workerCountries() {
	yield takeLatest(types.GET_COUNTRIES_REQUEST, getCountriesAsync);
}

export default workerCountries;
