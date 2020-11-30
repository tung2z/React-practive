import counter from './counter';
import logged from './isLogged';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	counter,
	logged,
});

export default rootReducers;
