import * as Actions from '../actions';

const initialState = {
	data: null
};

const profilesReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_PROFILES: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_PROFILES: {
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

export default profilesReducer;
