import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: ''
};

const gwgroupsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_GWGROUPS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SET_GWGROUPS_SEARCH_TEXT: {
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

export default gwgroupsReducer;
