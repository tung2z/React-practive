import recipes from './recipes';
import shoppingList from './shoppingList';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	recipes,
	shoppingList,
});

export default rootReducer;
