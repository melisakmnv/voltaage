import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Gear-Icon.svg';



export const GearIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 12, height: 15, ...sx }} viewBox={`0 0 12 15`} {...rest} />;
};
