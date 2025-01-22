import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Heart-Icon.svg';



export const HeartIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 12, height: 10, ...sx }} viewBox={`0 0 12 10`} {...rest} />;
};
