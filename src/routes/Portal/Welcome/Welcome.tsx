import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { PortalRoutePath } from '@models';

export const Welcome: FC = () => {
	// TODO: implement user role & permission logic in here
	return <Navigate to={`../${PortalRoutePath.DASHBOARD}`} replace />;
};
