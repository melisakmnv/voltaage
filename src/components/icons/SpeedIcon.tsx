import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Speed-Icon.svg';



export const SpeedIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 15, height: 11, ...sx }} viewBox={`0 0 15 11`} {...rest} />;
};
