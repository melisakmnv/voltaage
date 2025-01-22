import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mui/material';

interface IOutlinedIconButtonProps extends Omit<ButtonProps, 'variant'> {}

export const OutlinedIconButton = forwardRef<HTMLButtonElement, IOutlinedIconButtonProps>(({ children, sx, ...props }, ref) => {
	return (
		<Button
			ref={ref}
			variant="text"
			sx={{
				color: 'common.white',
				backgroundColor: 'transparent',
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: 'grey.200',
				borderRadius: 3,
				padding: 0,
				width: 48,
				height: 48,
				'&:hover': {
					color: 'common.black',
					backgroundColor: 'common.white',
				},
				...sx,
			}}
			{...props}
		>
			{children}
		</Button>
	);
});
