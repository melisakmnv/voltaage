import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/globe.svg';

export const GlobeIcon: FC<SvgIconProps> = ({ ...rest }) => {
	return <SvgIcon component={IconComponent} viewBox="0 0 48 48" {...rest} />;
};
