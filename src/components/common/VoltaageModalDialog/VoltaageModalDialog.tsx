import { FC, ReactNode } from 'react';
import { Dialog, DialogContent, DialogContentProps, DialogProps, DialogTitle, DialogTitleProps, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface IVoltaageModalDialogProps extends Omit<DialogProps, 'title'> {
	title?: ReactNode;
	titleProps?: DialogTitleProps;
	hideCloseIcon?: boolean;
	contentProps?: Omit<DialogContentProps, 'dividers'>;
	dividers?: boolean;
}

export const VoltaageModalDialog: FC<IVoltaageModalDialogProps> = ({
	children,
	title,
	titleProps: { sx: titleSx, ...titleProps } = {},
	hideCloseIcon,
	contentProps,
	dividers,
	...props
}) => {
	const { onClose } = props;
	return (
		<Dialog fullWidth maxWidth="md" {...props}>
			<DialogTitle sx={{ paddingY: 3, display: 'flex', justifyContent: 'center', ...titleSx }} {...titleProps}>
				{title}
				{!hideCloseIcon && (
					<IconButton
						color="inherit"
						sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)' }}
						onClick={(e) => onClose?.(e, 'escapeKeyDown')}
					>
						<CloseIcon />
					</IconButton>
				)}
			</DialogTitle>
			<DialogContent sx={{ p: 0 }} dividers={dividers} {...contentProps}>
				{children}
			</DialogContent>
		</Dialog>
	);
};
