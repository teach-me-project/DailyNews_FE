/** @format */

import axios from 'axios';

const GetPostRequest = () => {
	return {
		type: 'GET_POST_REQUEST',
	};
};

const GetPostSuccess = (data) => {
	return {
		type: 'GET_POST_SUCCESS',
		payload: data,
	};
};

const GetPostError = (error) => {
	return {
		type: 'GET_POST_ERROR',
		payload: error,
	};
};

export const GetPost = (a, b, c, d) => {
	return (dispatch) => {
		dispatch(GetPostRequest());
		axios({
			method: 'GET',
			url: `http://localhost:3289/api/v1/post/accepted?limit=${a}&page=${b}&order_by=${c}&sort=${d}`,
		})
			.then((res) => {
				dispatch(GetPostSuccess(res.data.list.post));
				console.log(res.data, 'cek postingan action');
			})
			.catch((err) => {
				dispatch(GetPostError(err.response.data))(
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

const PostArticleRequest = () => {
	return {
		type: 'POST_ARTICLE_REQUEST',
	};
};

const PostArticleSuccess = (data) => {
	return {
		type: 'POST_ARTICLE_SUCCESS',
		payload: data,
	};
};

const PostArticleError = (error) => {
	return {
		type: 'POST_ARTICLE_ERROR',
		payload: error,
	};
};

export const PostArticle = (token, formArticle, profile_id) => {
	return (dispatch) => {
		dispatch(PostArticleRequest());
		console.log(token, 'ini token action');
		console.log(formArticle, 'ini form action');
		console.log(profile_id, 'ini profile id action');
		axios({
			method: 'POST',
			url: `http://localhost:3289/api/v1/post?profile_id=${profile_id}`,
			data: formArticle,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(PostArticleSuccess(res.data));
			})
			.catch((err) => {
				dispatch(PostArticleError(err.response.data));
			});
	};
};

const GetArticleByIdRequest = () => {
	return {
		type: 'GET_ARTICLE_BYID_REQUEST',
	};
};

const GetArticleByIdSuccess = (data) => {
	return {
		type: 'GET_ARTICLE_BYID_SUCCESS',
		payload: data,
	};
};

const GetArticleByIdError = (error) => {
	return {
		type: 'GET_ARTICLE_BYID_ERROR',
		payload: error,
	};
};

export const GetArticleByID = () => {
	return (dispatch) => {
		dispatch(GetArticleByIdRequest());
		axios({
			method: 'GET',
			url: `http://localhost:3289/api/v1/post/id?post_id=1`,
		})
			.then((res) => {
				dispatch(GetArticleByIdSuccess(res.data));
			})
			.catch((err) => {
				dispatch(GetArticleByIdError(err.response.data));
			});
	};
};
