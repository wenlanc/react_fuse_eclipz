import * as Actions from '../actions';

const initialState = {
	data: null
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_APP: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_APP: {
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

export default appReducer;
