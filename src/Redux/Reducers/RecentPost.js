/** @format */

const initialState = {
	loading: false,
	datas: {},
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
				datas: state.datas,
				error: action.payload,
			};
		case 'GET_RECENT_SUCCESS':
			console.log(action.payload, 'cek post reducer page');
			return { ...state, loading: false, datas: action.payload, error: null };
		default:
			return state;
	}
};

export default Fetch;
