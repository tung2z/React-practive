import { combineReducers } from 'redux';
import loginError from './loginError.reducer';
import user from './user.reducer';
import brief from './brief.reducer';
import countries from './countries.reducer';
import targetCountry from './targetCountry.reducer';
import timeseries from './timeseries.reducer';
import targetTimeseriesCountry from './targetTimeseriesCountry.reducer';

const rootReducer = combineReducers({
	loginError,
	user,
	brief,
	countries,
	targetCountry,
	timeseries,
	targetTimeseriesCountry,
});

export default rootReducer;
