import { all } from 'redux-saga/effects';
import { fork } from 'redux-saga/effects';
import workerUser from './user.saga';
import workerBrief from './brief.saga';
import workerCountries from './countries.saga';
import workerTimeseries from './timeseries.saga';
function* rootSaga() {
	yield all([
		fork(workerUser),
		fork(workerBrief),
		fork(workerCountries),
		fork(workerTimeseries),
	]);
}

export default rootSaga;
