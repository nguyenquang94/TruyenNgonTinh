export const SWITCH_TO_ABSENCE_LIST = 'SWITCH_TO_ABSENCE_LIST';
export const SWITCH_TO_USER_LIST = 'SWITCH_TO_USER_LIST';

export const GO_TO_ABSENCE_DETAIL = 'GO_TO_ABSENCE_DETAIL';
export const GO_BACK = 'Navigation/BACK';

export function switchToAbsenceList() {
	return {
		type: SWITCH_TO_ABSENCE_LIST
	};
}

export function switchToUserList() {
	return {
		type: SWITCH_TO_USER_LIST
	};
}

export function goToAbsenceDetail() {
	return {
		type: GO_TO_ABSENCE_DETAIL
	};
}

export function goBack() {
	return {
		type: GO_BACK
	}
}