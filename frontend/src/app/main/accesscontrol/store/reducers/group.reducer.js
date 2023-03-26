import * as Actions from '../actions';

const initialState = {
	data: null
};

const groupReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_GROUP: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_GROUP: {
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

export default groupReducer;
