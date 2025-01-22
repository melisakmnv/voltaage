import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Trees-Illustration.svg';



export const TreeIllustration: FC<SvgIconProps> = ({ sx, ...rest }) => {
    const { width = 200, height = 98 } = rest;
	return <SvgIcon component={IconComponent} sx={{ width: {width}, height: {height}, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} />;
};
