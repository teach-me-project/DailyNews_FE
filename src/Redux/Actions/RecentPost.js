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

export const GetRecent = () => {
	return (dispatch) => {
		dispatch(GetRecentRequest());
		axios({
			method: 'GET',
			url: `${process.env.REACT_APP_URL_BE}/api/v1/post/accepted?limit=3&order_by=created_at&page=1&sort=DESC`,
		})
			.then((res) => {
				dispatch(GetRecentSuccess(res.data.list.post));
				console.log(res.data.list, 'cek postingan action recent');
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
