/** @format */

import axios from 'axios';

const GetNotificationRequest = () => {
	return {
		type: 'GET_NOTIFICATION_REQUEST',
	};
};

const GetNotificationSuccess = (data) => {
	return {
		type: 'GET_NOTIFICATION_SUCCESS',
		payload: data,
	};
};

const GetNotificationError = (error) => {
	return {
		type: 'GET_NOTIFICATION_ERROR',
		payload: error,
	};
};

export const GetNotification = (profile_id, token) => {
	return (dispatch) => {
		dispatch(GetNotificationRequest());
		axios({
			method: 'GET',
			url: `https://seahorse-app-cli76.ondigitalocean.app/api/v1/notification?profile_id=${profile_id}`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(GetNotificationSuccess(res.data));
			})
			.catch((err) => {
				dispatch(GetNotificationError(err.response.data));
			});
		// dispatch(GetUserSuccess({
		//     email: 'test@gmail.com',
		//     password: 'test1'
		// }))
	};
};
