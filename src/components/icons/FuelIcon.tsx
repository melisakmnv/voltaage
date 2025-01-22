import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/fuel.svg';

export const FuelIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	const { width = 18, height = 16 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width, height, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
