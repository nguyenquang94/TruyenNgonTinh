import { RECIVED_LIST_STORY } from '../actions/request';
const defaultState = {
	data: [],
	loaded: false,
	loading: true,
	lastUpdate: false,
};

export function request(state = defaultState, action) {
	switch (action.type) {
		case RECIVED_LIST_STORY:
			return Object.assign({}, state, {
				loaded: true,
				loading: false,
				data: action.data,
				lastUpdate: new Date(),
			});
		default:
			return state;
	}
}