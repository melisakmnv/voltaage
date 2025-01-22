import { IConfig } from './config.interface';

const isProd = (process.env.NODE_ENV || '').toLowerCase().startsWith('prod');
const apiUrl = isProd ? 'https://api.dev.voltaage.io' : 'http://localhost:3000';

export const config: IConfig = {
	apiUrl,
};
