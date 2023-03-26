import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: '',
	rowsPerPage: 10,
	order : { 
		_id: null,
		_direction: 'asc'
	},
	page: 0,
	totalItems: 0,
	totalPages: 0
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_USERS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SET_USERS_SEARCH_TEXT: {
			return {
				...state,
				searchText: action.searchText
			};
		}
		case Actions.SET_USERS_PAGINATION_ROWSPERPAGE: {
			return {
				...state,
				rowsPerPage: action.payload
			};
		}
		case Actions.SET_USERS_PAGINATION_CURRENTPAGE: {
			return {
				...state,
				page: action.payload
			};
		}
		case Actions.SET_USERS_PAGINATION_TOTALITEMS: {
			return {
				...state,
				totalItems: action.payload
			};
		}
		case Actions.SET_USERS_PAGINATION_TOTALPAGES: {
			return {
				...state,
				totalPages: action.payload
			};
		}
		case Actions.SET_USERS_PAGINATION_ORDER: {
			return {
				...state,
				order: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default usersReducer;
