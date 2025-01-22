import { Avatar, Card, CardContent, CardHeader, CardProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface IConfiguratorCardProps extends CardProps {
	title?: string;
	icon?: ReactNode;
	bgColor?: 'transparent' | 'colored';
	disablePaddingX?: boolean;
}

export const ConfiguratorCard: FC<IConfiguratorCardProps> = ({ title, icon, bgColor = 'transparent', disablePaddingX, sx, children }) => {
	return (
		<Card
			variant="outlined"
			sx={{
				borderRadius: 8,
				borderStyle: bgColor === 'colored' ? 'none' : 'solid',
				borderWidth: bgColor === 'colored' ? 0 : 1,
				borderColor: 'grey.500',
				backgroundColor: 'transparent',
				backgroundImage: bgColor === 'colored' ? 'linear-gradient(115deg, #17ead9 -14%, #6176f4 100%)' : undefined,
				color: 'inherit',
				height: 1.0,
				display: 'flex',
				flexDirection: 'column',
				...sx,
			}}
		>
			{title || icon ? (
				<CardHeader
					title={title}
					titleTypographyProps={{ variant: 'body1', fontWeight: 600 }}
					sx={{
						borderBottomStyle: 'solid',
						borderBottomWidth: 1,
						borderBottomColor: 'grey.500',
						minHeight: 36,
						'.MuiCardHeader-avatar': { marginRight: 1.5 },
					}}
					avatar={
						icon && <Avatar sx={{ backgroundColor: 'grey.200', color: 'common.black', width: 36, height: 36 }}>{icon}</Avatar>
					}
				/>
			) : null}
			{children ? (
				<CardContent
					sx={{
						paddingX: disablePaddingX ? 0 : 3,
						paddingY: '0 !important',
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1,
					}}
				>
					{children}
				</CardContent>
			) : null}
		</Card>
	);
};
