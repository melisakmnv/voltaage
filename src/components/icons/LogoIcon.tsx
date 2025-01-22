import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Logo-Icon.svg';



export const LogoIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	const { width = 123, height = 36 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width: { width }, height: { height }, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
3