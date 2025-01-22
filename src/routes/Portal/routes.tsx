import { Navigate } from 'react-router-dom';
import { IRoute, PortalRoutePath } from '@models';
import { PortalLayout } from '@components/portal/common';
import { Welcome } from './Welcome';
import { DASHBOARD_ROUTES } from './Dashboard';

export const PORTAL_ROUTES: IRoute = {
	path: '/portal',
	element: <PortalLayout />,
	children: [
		{
			path: 'welcome',
			hideFromMenu: true,
			element: <Welcome />
		},
		DASHBOARD_ROUTES,
		{
			index: true,
			path: '*',
			hideFromMenu: true,
			element: <Navigate to={{ pathname: PortalRoutePath.WELCOME }} replace />
		}
	]
};
