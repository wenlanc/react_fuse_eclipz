import * as Actions from '../actions';

const initialState = {
	data: null
};

const gwgroupReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_GWGROUP: {
			return {
				...state,
				data: action.payload
			};
		}
		case Actions.SAVE_GWGROUP: {
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

export default gwgroupReducer;
