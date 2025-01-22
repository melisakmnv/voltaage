import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Batery-Icon.svg';



export const BateryIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 13, height: 14, ...sx }} viewBox={`0 0 13 14`} {...rest} />;
};
