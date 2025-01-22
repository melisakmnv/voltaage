import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/checkbox-unchecked.svg';

export const CheckboxUncheckedIcon: FC<SvgIconProps> = ({ ...rest }) => {
	return <SvgIcon component={IconComponent} viewBox="0 0 30 30" {...rest} />;
};
