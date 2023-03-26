import * as Actions from '../actions';

const initialState = {
	data: null
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_SETTINGS: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_SETTINGS: {
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

export default settingsReducer;
