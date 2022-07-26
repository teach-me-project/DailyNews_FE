/** @format */

const initialState = {
	loading: true,
	data: {
		message: '',
		status: '',
		Comment: [
			{
				notification_id: '',
				target_profile_id: '',
				from_profile_id: '',
				profile_name: '',
				notification_message: '',
			},
		],
	},
	error: null,
	isLogin: true,
};
const initialStateDeleteNotif = {
	data: {
		message: '',
		resultdeletenotification: [],
	},
};

const FetchDelete = (state = initialStateDeleteNotif, action = {}) => {
	switch (action.type) {
		case 'DELETE_NOTIFICATION_REQUEST':
			return { ...state, loading: true };
		case 'DELETE_NOTIFICATION_ERROR':
			return {
				...state,
				data: state.data,
			};
		case 'DELETE_NOTIFICATION_SUCCESS':
			return {
				...state,

				data: action.payload,
			};
		default:
			return state;
	}
};
const Fetch = (state = initialState, action = {}) => {
	console.log(action.payload, 'ini  action.payloadnya');
	switch (action.type) {
		case 'GET_NOTIFICATION_REQUEST':
			return { ...state, loading: true };
		case 'GET_NOTIFICATION_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
				isLogin: false,
			};
		case 'GET_NOTIFICATION_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
				isLogin: true,
			};
		default:
			return state;
	}
};

export { Fetch, FetchDelete };
