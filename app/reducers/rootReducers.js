import { combineReducers } from 'redux';
import { nav, rootScreen } from './nav';
import { me } from './me';
import { sidemenu } from './sidemenu';

const rootReducer = combineReducers({
	nav,
	rootScreen,
	me,
	sidemenu
})

export default rootReducer;