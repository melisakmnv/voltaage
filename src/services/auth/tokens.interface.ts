import { AccessToken, IdToken, RefreshToken } from './token.interface';

export interface ITokens {
	idToken: IdToken;
	accessToken: AccessToken;
	refreshToken: RefreshToken;
	clockDrift: number;
}
