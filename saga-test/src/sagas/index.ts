import {
	put,
	takeLatest,
	delay,
	call,
	takeEvery,
	select,
} from 'redux-saga/effects';
import axios from 'axios';

const getUsers = async () => {
	const res = await axios({
		method: 'get',
		url: 'https://jsonplaceholder.typicode.com/users',
	});
	const data = res.data;
	if (res.status > 400) {
		throw new Error('error');
	}
	return data;
};

const getPosts = async (userId: any) => {
	const res = await axios({
		method: 'get',
		url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
	});
	const data = res.data;
	if (res.status > 400) {
		throw new Error('error');
	}

	return data;
};

export function* incrementAsync() {
	yield delay(1000);
	console.log('object');
	yield put({ type: 'INCREMENT' });
}

export function* getUsersAsync() {
	const users = yield call(getUsers);
	yield put({ type: 'GET_USERS', payload: users });
}

export function* getPostAsync() {
	const targetUserId = yield select(state => state.targetUserId);
	const posts = yield call(getPosts, targetUserId);
	yield put({ type: 'GET_POSTS', payload: posts });
}

export default function* rootSaga() {
	yield takeEvery('INCREMENT_ASYNC', incrementAsync);
	yield takeLatest('GET_USERS_ASYNC', getUsersAsync);
	yield takeLatest('GET_POSTS_ASYNC', getPostAsync);
}
