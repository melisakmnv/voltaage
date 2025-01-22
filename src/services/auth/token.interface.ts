interface ITokenPayloadCommon {
	sub: string;
	'cognito:groups': string[];
	iss: string;
	origin_jti: string;
	event_id: string;
	token_use: 'id' | 'access';
	auth_time: number;
	exp: number;
	iat: number;
	jti: string;
}

export interface IIdTokenPayload extends ITokenPayloadCommon {
	email_verified: boolean;
	'cognito:username': string;
	aud: string;
	email: string;
}

export interface IAccessTokenPayload extends ITokenPayloadCommon {
	client_id: string;
	username: string;
}

export interface IToken<PayloadType = Record<string, any>> {
	jwtToken: string;
	payload: PayloadType;
}

export type AccessToken = IToken<IAccessTokenPayload>;
export type IdToken = IToken<IIdTokenPayload>;
export type RefreshToken = { token: string };
