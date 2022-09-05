/** @format */

import axios from 'axios';

const GetRecentRequest = () => {
	return {
		type: 'GET_RECENT_REQUEST',
	};
};

const GetRecentSuccess = (data) => {
	return {
		type: 'GET_RECENT_SUCCESS',
		payload: data,
	};
};

const GetRecentError = (error) => {
	return {
		type: 'GET_RECENT_ERROR',
		payload: error,
	};
};

export const GetRecent = (params) => {
	const {limit, order_by, sort} = params

	return (dispatch) => {
		dispatch(GetRecentRequest());
		axios({
			method: 'GET',
			url: `http://localhost:3289/api/v1/post/accepted?limit=${limit ? `${limit}`:2}&order_by=${order_by ? `${order_by}`:`created_at`}&sort=${sort ? `${sort}`:`DESC`}`,
		})
			.then((res) => {
				dispatch(GetRecentSuccess(res.data.list.post));
				console.log(res.data, 'cek postingan action');
			})
			.catch((err) => {
				dispatch(GetRecentError(err.response.data))(
					err.response.data,
					'cek postingan error action'
				);
			});
		// dispatch(GetPostSuccess({
		//     email: 'test@gmail.com',
		//     password: 'test1'
		// }))
	};
};
