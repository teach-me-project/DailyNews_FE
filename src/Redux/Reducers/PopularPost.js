/** @format */

const initialState = {
	loading: false,
	data: {},
	error: null,
};

const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_POPULAR_REQUEST':
			return { ...state, loading: true };
		case 'GET_POPULAR_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
				
			};
		case 'GET_POPULAR_SUCCESS':
			console.log(action.payload, 'cek post reducer di popularPost');
			return { ...state, loading: false, data: action.payload, error: null };
		default:
			return state;
	}
};

export default Fetch;
