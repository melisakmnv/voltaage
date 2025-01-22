import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Seat-Icon.svg';



export const SeatIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 15, height: 15, ...sx }} viewBox={`0 0 15 15`} {...rest} />;
};
