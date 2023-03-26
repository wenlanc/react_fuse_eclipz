import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: '',
};

const downloadsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_DOWNLOADS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SET_DOWNLOADS_SEARCH_TEXT: {
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

export default downloadsReducer;
