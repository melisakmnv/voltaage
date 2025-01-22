import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Recharge-Icon.svg';



export const RechargeIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 16, height: 16, ...sx }} viewBox={`0 0 16 16`} {...rest} />;
};
