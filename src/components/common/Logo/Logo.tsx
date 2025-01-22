import { FC } from 'react';
import { Stack, StackProps, SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as LogoPrimary } from '@assets/logo/logo-primary.svg';
import { ReactComponent as LogoWhite } from '@assets/logo/logo-white.svg';

export type LogoVariant = 'primary' | 'white';
const LogoMap: Record<LogoVariant, any> = {
	primary: LogoPrimary,
	white: LogoWhite
};

export interface ILogoProps extends StackProps {
	variant?: LogoVariant;
	svgIconProps?: SvgIconProps;
}

export const Logo: FC<ILogoProps> = ({ variant = 'primary', svgIconProps: { sx: svgIconSx, ...svgIconProps } = {}, sx, ...props }) => {
	return (
		<Stack direction="row" spacing={0.5} alignItems="center" sx={{ ...sx }} {...props}>
			<SvgIcon component={LogoMap[variant]} sx={{ width: 160, height: 50, ...svgIconSx }} viewBox="0 0 173 50" {...svgIconProps} />
		</Stack>
	);
};
