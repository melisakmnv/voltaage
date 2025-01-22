import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Check-Icon-bg.svg';



export const CheckIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 22, height: 22, ...sx }} viewBox={`0 0 22 22`} {...rest} />;
};
