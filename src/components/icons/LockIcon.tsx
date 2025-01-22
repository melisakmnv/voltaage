import { forwardRef } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as IconComponent } from '@assets/icons/lock.svg';

export const LockIcon = forwardRef<SVGSVGElement, SvgIconProps>(({ ...rest }, ref) => {
	return <SvgIcon component={IconComponent} viewBox="0 0 24 24" {...rest} ref={ref} />;
});
