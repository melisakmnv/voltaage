import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Refill-Illustration.svg';



export const RefillIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
    const { width = 65, height = 64 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width: {width}, height: {height}, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
