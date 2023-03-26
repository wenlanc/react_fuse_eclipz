import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: ''
};

const groupsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_GROUPS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SET_GROUPS_SEARCH_TEXT: {
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

export default groupsReducer;
