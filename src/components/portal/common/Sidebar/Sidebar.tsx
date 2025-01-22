import { FC } from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';
import { useLoggedinUser } from '@hooks';
import { ROUTES } from '@routes';
import { IRoute } from '@models';
import { List, Stack } from '@mui/material';
import { Logo, RouterLinkListItem } from '@components/common';
import { UserInfo } from '../UserInfo';

export const Sidebar: FC = () => {
	const loc = useLocation();
	const user = useLoggedinUser();
	const matches = matchRoutes(ROUTES, loc);
	const route = matches?.[0].route as IRoute;
	const { path, children = [] } = route;
	const childRoutes = children.filter((child) => !child?.hideFromMenu);
	const hasAnyChildRouteIcon = childRoutes.some((child) => child?.icon);

	return (
		<Stack
			direction="column"
			justifyContent="space-between"
			sx={{ boxSizing: 'border-box', height: 1.0, paddingY: 5, backgroundColor: 'secondary.main', color: 'common.white' }}
		>
			<Logo variant="white" sx={{ paddingX: 5 }} svgIconProps={{ sx: { marginX: 'auto' } }} />
			<List sx={{ paddingY: 0, paddingX: 5 }}>
				{childRoutes.map((childRoute, i) => {
					if (!childRoute.canActivate || childRoute.canActivate(childRoute, user)) {
						const navigateTo = `${path ? path + '/' : ''}${childRoute.path}`;
						return (
							<RouterLinkListItem
								key={`child-menu-item-${childRoute.path}-${i}`}
								href={navigateTo}
								hasInset={hasAnyChildRouteIcon}
								route={childRoute}
							/>
						);
					} else {
						return null;
					}
				})}
			</List>
			<UserInfo />
		</Stack>
	);
};
