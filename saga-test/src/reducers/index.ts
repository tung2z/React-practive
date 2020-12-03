import { combineReducers } from 'redux';

export const counter = (state = 0, action: any) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

export const users = (state = [], action: any) => {
	switch (action.type) {
		case 'GET_USERS':
			return action.payload;
		default:
			return state;
	}
};

export const targetUserId = (state = -1, action: any) => {
	switch (action.type) {
		case 'CHANGE_TARGET_USERID':
			return action.payload;
		default:
			return state;
	}
};

export const posts = (state = [], action: any) => {
	switch (action.type) {
		case 'GET_POSTS':
			return action.payload;
		default:
			return state;
	}
};

const rootReducer = combineReducers({ counter, users, targetUserId, posts });

export default rootReducer;
