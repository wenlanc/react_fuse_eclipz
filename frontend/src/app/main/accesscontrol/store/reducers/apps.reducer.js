import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: ''
};

const appsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_APPS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SET_APPS_SEARCH_TEXT: {
			return {
				...state,
				searchText: action.searchText
			};
		}
		default: {
			return state;
		}
	}
};

export default appsReducer;
