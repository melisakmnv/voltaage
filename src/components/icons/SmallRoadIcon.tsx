import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/Road-Icon.svg';

export const SmallRoadIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	const { width = 14, height = 14 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width, height, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
