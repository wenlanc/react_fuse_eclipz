import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: ''
};

const adminsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_ADMINS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SET_ADMINS_SEARCH_TEXT: {
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

export default adminsReducer;
