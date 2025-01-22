import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Arrow-Icon.svg';



export const ArrowLeftIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
    const { width = 40, height = 26 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width: {width}, height: {height}, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
