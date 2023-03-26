import * as Actions from '../actions';

const initialState = {
	data: null
};

const optionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_OPTIONS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_OPTIONS: {
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

export default optionsReducer;
