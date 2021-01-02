import { all } from 'redux-saga/effects';
import workerTest from './test.saga';

function* rootSaga() {
	yield all([workerTest]);
}

export default rootSaga;
