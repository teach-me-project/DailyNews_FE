/** @format */

const initialState = {
	loading: false,
	data: {},
	error: null,
};

const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_RECENT_REQUEST':
			return { ...state, loading: true };
		case 'GET_RECENT_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
				
			};
		case 'GET_RECENT_SUCCESS':
			console.log(action.payload, 'cek post reducer di recentPost');
			return { ...state, loading: false, data: action.payload, error: null };
		default:
			return state;
	}
};

export default Fetch;
