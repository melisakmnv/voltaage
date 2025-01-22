import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Arrow-circle-Icon.svg';


export const ArrowCircleIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
    const { width = 22, height = 22 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width: {width}, height: {height}, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};



