import * as Actions from '../actions';

const initialState = {
	data: null
};

const domainReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_DOMAIN: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_DOMAIN: {
			return {
				...state,
				data: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default domainReducer;
