import * as Actions from '../actions';

const initialState = {
	data: null
};

const downloadReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_DOWNLOAD: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_DOWNLOAD: {
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

export default downloadReducer;
