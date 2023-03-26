import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: ''
};

const domainsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_DOMAINS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SET_DOMAINS_SEARCH_TEXT: {
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

export default domainsReducer;
