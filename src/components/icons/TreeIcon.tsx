import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/tree.svg';

export const TreeIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	const { width = 16, height = 18 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width, height, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
