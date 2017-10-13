import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { MainNavigator } from '../navigators/MainNavigator';
import { NavigationActions } from 'react-navigation';

import {
	SWITCH_TO_ABSENCE_LIST,
	GO_TO_ABSENCE_DETAIL
} from '../actions/nav';

const firstAction = MainNavigator.router.getActionForPathAndParams('Root');
const tempNavState = MainNavigator.router.getStateForAction(firstAction);


export function nav(state = tempNavState, action)
{
	switch (action.type)
	{
		case GO_TO_ABSENCE_DETAIL: 
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "AbsenceDetail" }),
				state
			);
		case 'Navigation/BACK':
			return MainNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
		default:
			return state;
	}
}

export function rootScreen(state = "dashboard", action) {
	switch (action.type) {
		case SWITCH_TO_ABSENCE_LIST:
			return "absence_list";
		default:
			return state;
	}
}