export enum LanguageCode {
	TR = 'tr',
	EN = 'en',
}

export interface ILanguage {
	code: LanguageCode;
	text: string;
}

export const DEFAULT_LANGUAGE: ILanguage = { code: LanguageCode.EN, text: 'English' };
export const AVAILABLE_LANGUAGES: ILanguage[] = [DEFAULT_LANGUAGE, { code: LanguageCode.TR, text: 'Türkçe' }];
