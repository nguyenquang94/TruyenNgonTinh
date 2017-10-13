import { UPDATE_LOCAL_INFO, REMOVE_SESSION } from '../actions/me';

export function me(state = {}, action) {
	switch (action.type) {
		case UPDATE_LOCAL_INFO:
			return Object.assign({}, state, action.info);
		case REMOVE_SESSION:
			return {};
		default:
			return state;
	}
}