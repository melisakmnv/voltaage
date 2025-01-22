import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/types';

export interface IFormHintsState {
	email?: Maybe<string>;
}

const initialState: IFormHintsState = {
	email: undefined,
};

export const {
	actions: { setEmailFormHint },
	reducer,
} = createSlice({
	name: 'formhints',
	initialState,
	reducers: {
		setEmailFormHint: (state, data: PayloadAction<Maybe<string>>) => {
			state.email = data.payload;
		},
	},
});

export const emailFormHintSelector = (state: RootState) => state.FormHints.email;
