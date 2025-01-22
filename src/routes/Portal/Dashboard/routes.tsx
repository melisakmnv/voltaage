import { Navigate } from 'react-router-dom';
import { IRoute, PortalRoutePath } from '@models';
import { Tr } from '@utils';
import { GlobeIcon } from '@components/icons';
import { Dashboard } from './Dashboard';

export const DASHBOARD_ROUTES: IRoute = {
	path: PortalRoutePath.DASHBOARD,
	icon: <GlobeIcon />,
	text: <Tr.Portal path="dashboard.title" />,
	canActivate: (_route, _user) => true,
	children: [
		{
			path: '',
			element: <Dashboard />
		},
		{
			index: true,
			path: '*',
			hideFromMenu: true,
			element: <Navigate to={{ pathname: '..' }} replace />
		}
	]
};
