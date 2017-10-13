export const UPDATE_LOCAL_INFO = 'UPDATE_LOCAL_INFO';
export const REMOVE_SESSION = 'REMOVE_SESSION';

import { AsyncStorage } from 'react-native';
import { Define } from '../Define';
import { switchToAbsenceList } from '../actions/nav';

export function updateLocalInfo(info) {
	return {
		type: UPDATE_LOCAL_INFO,
		info 
	};
}

export function login() {
	return (dispatch, getState) => {
		const { username, password } = getState().me;
		fetch(Define.url('oauth/token') , {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				grant_type: 'password',
				client_id: Define.pp_client_id,
				client_secret: Define.pp_client_secret,
				username: username,
				password: password,
				scope: ''
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if (responseJson.access_token)
			{
				dispatch(updateLocalInfo({ accessToken: responseJson.access_token }));
				dispatch(saveSession());
				dispatch(switchToAbsenceList());
			}
			if (responseJson.error)
			{
				alert(responseJson.message);
			}
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		})
	}
}

export function register() {
	return (dispatch, getState) => {
		fetch(Define.url('api/user') , {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(getState().me)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if (responseJson.code == 200)
			{
				dispatch(goBack());
				alert("Đăng kí thành công");
			}
			else
			{
				alert("Lỗi");
			}
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		})
	}
}

export function updateUserInfo(data) {
	return (dispatch, getState) => {
		fetch(Define.url('api/user/me') , {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getState().me.accessToken
			},
			body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		})
	}
}

export function loadSession() {
	return (dispatch, getState) => {
		AsyncStorage.getItem("@BWhere:accessToken").then((accessToken) => {
			if (accessToken)
			{
				dispatch(updateLocalInfo({ accessToken }))
			}
		});
	}
}

export function removeSession() {
	AsyncStorage.removeItem("@BWhere:accessToken");
	return {
		type: REMOVE_SESSION
	}
}

function saveSession() {
	return (dispatch, getState) => {
		AsyncStorage.setItem("@BWhere:accessToken", getState().me.accessToken);
	}
}