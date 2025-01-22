import { combineReducers } from '@reduxjs/toolkit';
import { reducer as Common } from './slices/common.slice';
import { reducer as FormHints } from './slices/form-hints.slice';

export const rootReducer = combineReducers({
	Common,
	FormHints,
});
