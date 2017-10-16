export const RECIVED_LIST_STORY = 'RECIVED_LIST_STORY';

import { AsyncStorage } from 'react-native';
import { Define } from '../Define';

export function recivedListStory(data) {
	return {
		type: RECIVED_LIST_STORY,
		data 
	};
}

export function requestListStory(page) {
	return (dispatch, getState) => {
		console.log('nguyendasdsa',Define.url(`list?page=${page}$&category=20`));
		fetch(Define.url(`list?page=${page}$&category=20`) , {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
				dispatch(recivedListStory(responseJson.data));
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		})
	}
}
