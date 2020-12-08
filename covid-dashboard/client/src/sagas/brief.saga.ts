import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { HOST } from '../utils';
import * as types from '../actions/actionType';
import * as actions from '../actions';

const getBrief = (token: string) => {
	return axios({
		method: 'get',
		url: `${HOST}/api/brief`,
		headers: {
			Authorization: token,
		},
	});
};

function* getBriefAsync() {
	const token = yield select(state => state.user.token);
	try {
		const data = yield call(getBrief, token);
		yield put(actions.getBriefSuccess(data.data.brief));
	} catch (error) {
		console.log(error);
	}
}

function* workerBrief() {
	yield takeLatest(types.GET_BRIEF_REQUEST, getBriefAsync);
}

export default workerBrief;
