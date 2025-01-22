import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/road.svg';

export const RoadIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	const { width = 18, height = 18 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width, height, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
