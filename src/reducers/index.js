import { combineReducers } from 'redux';
import tagListReducer from './reducer_tagList';
import tagDropdownReducer from './reducer_tagDropdown';
import colorListReducer from './reducer_colorList';
import displayToggleReducer from './reducer_displayToggle';
import allTagsReducer from './reducer_allTags';

const summaryReducers = combineReducers({
	tagList: tagListReducer,
	tagDropdown: tagDropdownReducer,
	colorList: colorListReducer,
	displayToggle: displayToggleReducer,
	allTags: allTagsReducer
});

export default summaryReducers;