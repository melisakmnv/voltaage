import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useFormik } from 'formik';

type FormikApiType = ReturnType<typeof useFormik>;

export interface IFormikSubmitButtonProps extends ButtonProps {
	submitManual?: boolean;
	formik: FormikApiType;
}

export const FormikSubmitButton: FC<IFormikSubmitButtonProps> = ({ formik, submitManual, sx, onClick, ...props }) => {
	return (
		<Button
			type="submit"
			variant="contained"
			color="secondary"
			sx={{ marginX: 'auto !important', ...sx }}
			disabled={!formik.isValid || formik.isSubmitting}
			onClick={(e) => {
				submitManual && formik.submitForm();
				onClick?.(e);
			}}
			{...props}
		/>
	);
};
