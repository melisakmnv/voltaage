import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Change-Icon.svg';



export const ChangeIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
    const { width = 20, height = 20 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width: {width}, height: {height}, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
