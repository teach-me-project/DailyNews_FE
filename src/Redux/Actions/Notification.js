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
const DeleteNotificationRequest = () => {
	return {
		type: 'DELETE_NOTIFICATION_REQUEST',
	};
};

const DeleteNotificationSuccess = (data) => {
	return {
		type: 'DELETE_NOTIFICATION_SUCCESS',
		payload: data,
	};
};

const DeleteNotificationError = (error) => {
	return {
		type: 'DELETE_NOTIFICATION_ERROR',
		payload: error,
	};
};

export const GetNotification = (profile_id, token) => {
	return (dispatch) => {
		dispatch(GetNotificationRequest());
		axios({
			method: 'GET',
			url: `${process.env.REACT_APP_URL_BE}/api/v1/notification?profile_id=${profile_id}`,
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
export const DeleteNotification = (notification_id, profile_id, token) => {
	return (dispatch) => {
		dispatch(DeleteNotificationRequest());
		axios({
			method: 'DELETE',
			url: `${process.env.REACT_APP_URL_BE}/api/v1/notification?notification_id=${notification_id}&profile_id=${profile_id}`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(DeleteNotificationSuccess(res.data));
			})
			.catch((err) => {
				dispatch(DeleteNotificationError(err.response.data));
			});
		// dispatch(GetUserSuccess({
		//     email: 'test@gmail.com',
		//     password: 'test1'
		// }))
	};
};
