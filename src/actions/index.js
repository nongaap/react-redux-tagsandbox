export const DELETE_TAG = 'DELETE_TAG';
export const ADD_TAG = 'ADD_TAG';
export const ADD_ALL_TAG = 'ADD_ALL_TAG';
export const REMOVE_DROPDOWN_TAG = 'REMOVE_DROPDOWN_TAG';
export const ADD_DROPDOWN_TAG = 'ADD_DROPDOWN_TAG';
export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';
export const HIDE_DROPDOWN = 'HIDE_DROPDOWN';
export const SHOW_COLOR = 'SHOW_COLOR';
export const HIDE_COLOR = 'HIDE_COLOR';
export const SHOW_PICKER = 'SHOW_PICKER';
export const HIDE_PICKER = 'HIDE_PICKER';

export function deleteTag(index) {

	return {
		type: DELETE_TAG,
		payload: index
	}
}

export function addTag(tagObject) {

	return {
		type: ADD_TAG,
		payload: tagObject
	}
}

export function addAllTag(tagObject) {

	return {
		type: ADD_ALL_TAG,
		payload: tagObject
	}
}

export function removeDropdownTag(index) {

	return {
		type: REMOVE_DROPDOWN_TAG,
		payload: index
	}
}

export function addDropdownTag(tagObject) {

	return {
		type: ADD_DROPDOWN_TAG,
		payload: tagObject
	}
}

export function showDropdown() {

	return {
		type: SHOW_DROPDOWN,
		payload: 'block'
	}
}

export function hideDropdown() {

	return {
		type: HIDE_DROPDOWN,
		payload: 'none'
	}
}

export function showColor() {
	return {
		type: SHOW_COLOR,
		payload: 'block'
	}
}

export function hideColor() {
	return {
		type: HIDE_COLOR,
		payload: 'none'
	}
}

export function showPicker() {
	return {
		type: SHOW_PICKER,
		payload: 'inline-block'
	}
}

export function hidePicker() {
	return {
		type: HIDE_PICKER,
		payload: 'none'
	}
}