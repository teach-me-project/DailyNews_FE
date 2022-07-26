/** @format */

import axios from 'axios';

const GetPageRequest = () => {
	return {
		type: 'GET_PAGE_REQUEST',
	};
};

const GetPageSuccess = (data) => {
	return {
		type: 'GET_PAGE_SUCCESS',
		payload: data,
	};
};

const GetPageError = (error) => {
	return {
		type: 'GET_PAGE_ERROR',
		payload: error,
	};
};

export const GetPage = (a, b, c, d) => {
	return (dispatch) => {
		dispatch(GetPageRequest());
		axios({
			method: 'GET',
			url: `http://localhost:3289/api/v1/post/accepted?limit=${a}&page=${b}&order_by=${c}&sort=${d}`,
		})
			.then((res) => {
				dispatch(GetPageSuccess(res.data.list.post));
				console.log(res.data, 'cek postingan action');
			})
			.catch((err) => {
				dispatch(GetPageError(err.response.data))(
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
