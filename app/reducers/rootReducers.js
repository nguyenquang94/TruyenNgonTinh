import { combineReducers } from 'redux';
import { nav, rootScreen } from './nav';
import { request } from './request';
import { sidemenu } from './sidemenu';

const rootReducer = combineReducers({
	nav,
	rootScreen,
	request,
	sidemenu
})

export default rootReducer;