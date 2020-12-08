import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { HOST } from '../utils/index';
import * as types from '../actions/actionType';

const getUser = (body: any) => {
	return axios({
		method: 'post',
		url: `${HOST}/api/login`,
		data: body,
	});
};

function* getUserAsync(action: any) {
	try {
		const data = yield call(getUser, action.payload);
		yield put({ type: types.GET_USER_SUCCESS, payload: data.data.user });
		yield put({ type: types.GET_LOGIN_ERROR, payload: '' });
	} catch (error) {
		yield put({
			type: types.GET_LOGIN_ERROR,
			payload: 'Email or password is invalid',
		});
	}
}

function* workerUser() {
	yield takeLatest(types.GET_USER_REQUEST, getUserAsync);
}

export default workerUser;
