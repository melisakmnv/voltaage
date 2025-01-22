import { FC, useEffect, useState } from 'react';
import { matchRoutes, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '@routes';
import { IRoute, PageType } from '@models';
import { Grid } from '@mui/material';
import { Sidebar } from '../Sidebar';

export const PortalLayout: FC = () => {
	const loc = useLocation();
	const [pageType, setPageType] = useState<PageType>(PageType.STANDARD);
	const isSidebarVisible = pageType !== PageType.FULLSCREEN;

	useEffect(() => {
		const matches = matchRoutes(ROUTES, loc);
		const route = matches?.slice(-1)?.[0].route as IRoute;
		setPageType(route.pageType || PageType.STANDARD);
	}, [loc]);

	return (
		<Grid container sx={{ flexGrow: 1, flexWrap: 'nowrap', backgroundColor: 'background.default', maxHeight: 1.0, overflow: 'hidden' }}>
			{isSidebarVisible ? (
				<Grid item sx={{ width: 300, maxHeight: 1.0 }}>
					<Sidebar />
				</Grid>
			) : null}

			<Grid item xs sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: 1.0 }}>
				<Outlet />
			</Grid>
		</Grid>
	);
};
