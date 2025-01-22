import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/car.svg';

export const CarIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 18, height: 18, ...sx }} viewBox={`0 0 18 18`} {...rest} />;
};
