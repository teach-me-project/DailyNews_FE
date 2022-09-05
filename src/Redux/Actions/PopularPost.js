/** @format */

import axios from 'axios';

const GetPopularRequest = () => {
	return {
		type: 'GET_POPULAR_REQUEST',
	};
};

const GetPopularSuccess = (data) => {
	return {
		type: 'GET_POPULAR_SUCCESS',
		payload: data,
	};
};

const GetPopularError = (error) => {
	return {
		type: 'GET_POPULAR_ERROR',
		payload: error,
	};
};

export const GetPopular = () => {
	return (dispatch) => {
		dispatch(GetPopularRequest());
		axios({
			method: 'GET',
			url: 'http://localhost:3289/api/v1/post/accepted?limit=3&order_by=like_count&page=1&sort=DESC',
		})
			.then((res) => {
				dispatch(GetPopularSuccess(res.data.list.post));
				console.log(res.data.list, 'cek postingan action Popular');
			})
			.catch((err) => {
				dispatch(GetPopularError(err.response.data))(
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
