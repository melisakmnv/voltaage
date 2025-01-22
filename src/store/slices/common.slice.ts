import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/types';
import { DEFAULT_LANGUAGE, LanguageCode } from '@models';
import { ITokens, IUser } from '@services';

export interface ICommonState {
	language: LanguageCode;
	loggedinUser?: Maybe<Partial<IUser>>;
	tokens?: Maybe<ITokens>;
}

const initialState: ICommonState = {
	language: DEFAULT_LANGUAGE.code,
	loggedinUser: null,
	tokens: null
};

export const {
	actions: { setLanguage, setLoggedinUser, setTokens },
	reducer
} = createSlice({
	name: 'common',
	initialState,
	reducers: {
		setLanguage: (state, data: PayloadAction<LanguageCode>) => {
			state.language = data.payload || initialState.language;
		},
		setLoggedinUser: (state, data: PayloadAction<Maybe<Partial<IUser>>>) => {
			state.loggedinUser = JSON.parse(JSON.stringify(data.payload));
		},
		setTokens: (state, data: PayloadAction<Maybe<ITokens>>) => {
			state.tokens = JSON.parse(JSON.stringify(data.payload));
			if (!data.payload) {
				state.loggedinUser = null;
			}
		}
	}
});

export const languageSelector = (state: RootState) => state.Common.language || initialState.language;
export const loggedinUserSelector = (state: RootState) => state.Common.loggedinUser;
export const tokensSelector = (state: RootState) => state.Common.loggedinUser;
