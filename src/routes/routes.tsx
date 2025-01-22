import { Navigate } from 'react-router-dom';
import { IRoute } from '@models';
import { PORTAL_ROUTES } from './Portal';
import { Configurator } from './Configurator';
import { Proposte } from './Proposte/Proposte';



export const ROUTES: IRoute[] = [
	{
		path: '/',
		element: <Navigate to={{ pathname: '/proposte' }} replace />
	},
	{
		path: '/configurator',
		element: <Configurator />,
	},
	{
		path: '/proposte',
		element: <Proposte />,
	},
	PORTAL_ROUTES,
	{
		path: '*',
		element: <Navigate to={{ pathname: '/' }} replace />,
	},
];
