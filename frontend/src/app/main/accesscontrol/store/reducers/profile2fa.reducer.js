import * as Actions from '../actions';

const initialState = {
	data: null
};

const profile2faReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_PROFILE2FA: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_PROFILE2FA: {
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

export default profile2faReducer;
