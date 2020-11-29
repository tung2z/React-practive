/* eslint-disable @typescript-eslint/no-use-before-define */
import { IIngredient } from '../interfaces';

const shoppingList = (state: IIngredient[] = [], action: any) => {
	debugger;
	let temp: any[] = [];
	let index = 0;
	switch (action.type) {
		case 'ADD/UPDATE':
			index = state.findIndex(
				ingredient => ingredient.name === action.payload.name
			);
			temp =
				index === -1
					? [...state, action.payload]
					: [
							...state.slice(0, index),
							action.payload,
							...state.slice(index + 1),
					  ];

			return temp;
		case 'DELETE':
			index = state.findIndex(item => item.name === action.payload);
			return [...state.slice(0, index), ...state.slice(index + 1)];
		case 'ADD_ALL':
			action.payload.forEach((item: any) => {
				let index = state.findIndex(
					ingredient => ingredient.name === item.name
				);
				if (index !== -1) {
					item.quantity += state[index].quantity;
				}
				temp =
					index === -1
						? [...state, item]
						: [...state.slice(0, index), item, ...state.slice(index + 1)];
			});
			return temp;
		default:
			return state;
	}
};

export default shoppingList;
