import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '../../assets/icons/Tree-Icon.svg';

export const TreeFullIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
	return <SvgIcon component={IconComponent} sx={{ width: 32, height: 32, ...sx }} viewBox={`0 0 32 32`} {...rest} />;
};
