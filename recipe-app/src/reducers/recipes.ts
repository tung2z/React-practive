import Recipes from '../utils/data.json';
import { IDataItem } from '../interfaces';

const recipes = (state: IDataItem[] = Recipes, action: any) => {
	let index = 0;
	switch (action.type) {
		case 'ADD_RECIPE':
			return [...state, action.payload];
		case 'EDIT_RECIPE':
			index = state.findIndex(item => item.id === Number(action.payload.id));
			return [
				...state.slice(0, index),
				action.payload,
				...state.slice(index + 1),
			];
		case 'DELETE_RECIPE':
			index = state.findIndex(item => item.id === action.payload);
			return [...state.slice(0, index), ...state.slice(index + 1)];
		default:
			return state;
	}
};

export default recipes;
