import { FC, forwardRef, ReactNode, useMemo } from 'react';
import styles from './RouterLinkListItem.module.scss';
import { IRoute } from '@models';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { LinkProps, ListItemButton, ListItemIcon, ListItemText, Stack, Box, Tooltip } from '@mui/material';
import { RouterLinkAnchor } from '../RouterLinkAnchor';
import { LockIcon } from '@components/icons';

interface IRouterLinkListItemProps {
	href: string;
	hasInset?: boolean;
	disabledText?: ReactNode;
	route?: IRoute;
	onClick?: () => void;
}

export const RouterLinkListItem: FC<IRouterLinkListItemProps> = ({
	href,
	hasInset,
	disabledText,
	onClick,
	route: { icon, text, hideFromMenu } = {},
}) => {
	const renderLink = useMemo(
		() =>
			forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(({ children, ...props }, ref) => {
				const resolved = useResolvedPath(href);
				const match = useMatch({ path: resolved.pathname, end: false });
				return (
					<RouterLinkAnchor
						ref={ref}
						classes={{ root: styles.ListItem }}
						sx={{
							backgroundColor: (theme) => (match ? `${theme.palette.primary.main} !important` : undefined),
							'&:hover': { color: (theme) => (match ? undefined : `${theme.palette.primary.main} !important`) },
						}}
						href={href}
						{...props}
					>
						{children}
					</RouterLinkAnchor>
				);
			}),
		[href]
	);

	return !hideFromMenu ? (
		<Box sx={{ position: 'relative', cursor: disabledText ? 'not-allowed' : undefined }}>
			<ListItemButton
				component={renderLink}
				onClick={onClick}
				disabled={!!disabledText}
				sx={{
					'&.Mui-disabled': {
						opacity: 1,
					},
				}}
			>
				{icon ? <ListItemIcon classes={{ root: styles.ListItemIcon }}>{icon}</ListItemIcon> : null}
				{text ? (
					<Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center" sx={{ width: 1.0 }}>
						<ListItemText inset={hasInset && !icon} classes={{ inset: styles.ListItemTextInset }} primary={text} />
					</Stack>
				) : null}
			</ListItemButton>
			{disabledText ? (
				<Tooltip title={disabledText} arrow placement="right">
					<LockIcon
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							top: 'calc(50% - 2px)',
							right: -16,
							transform: 'translateY(-50%)',
							width: 24,
							height: 24,
							color: 'primary.main',
						}}
					/>
				</Tooltip>
			) : null}
		</Box>
	) : null;
};
