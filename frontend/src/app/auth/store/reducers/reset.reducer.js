import * as Actions from '../actions';

const initialState = {
	email : ""
};

const reset = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_RESET_USER_EMAIL: {
			return {
				email : action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default reset;
