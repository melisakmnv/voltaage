import { FC, ReactNode } from 'react';
import { Stack, StackProps, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material';
import { Field, FieldProps, useFormik } from 'formik';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type FormikApiType = ReturnType<typeof useFormik>;

type TextInputBaseProps = Omit<TextFieldProps, 'error' | 'helperText'> & {
	name: string;
	value: any;
	touched?: boolean;
	error?: string;
};

const TextInputBase: FC<TextInputBaseProps> = ({ touched, error, ...props }) => {
	return (
		<TextField
			error={touched && !!error}
			helperText={touched && error}
			InputLabelProps={{
				sx: {
					'&.MuiInputLabel-root': {
						color: 'grey.800'
					},
					'&.Mui-focused': {
						color: 'grey.800'
					}
				}
			}}
			{...props}
		/>
	);
};

const TextInputWithFormikField: FC<FieldProps & Omit<TextFieldProps, 'error' | 'helperText'>> = ({
	field: { name, value, onChange, onBlur },
	form: { getFieldMeta },
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	const { touched, error } = getFieldMeta(name);
	return (
		<TextInputBase
			{...props}
			name={name}
			value={value}
			onChange={(e) => {
				onChange(e);
				inputOnChange?.(e);
			}}
			onBlur={(e) => {
				onBlur(e);
				inputOnBlur?.(e);
			}}
			error={error}
			touched={touched}
		/>
	);
};

const TextInputWithFormikApi: FC<{ api: FormikApiType } & Omit<TextFieldProps, 'error' | 'helperText'> & { name: string }> = ({
	api: { values, errors, touched, handleChange, handleBlur },
	name,
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	return (
		<TextInputBase
			{...props}
			name={name}
			value={values[name]}
			onChange={(e) => {
				handleChange(e);
				inputOnChange?.(e);
			}}
			onBlur={(e) => {
				handleBlur(e);
				inputOnBlur?.(e);
			}}
			error={errors[name] as string}
			touched={touched[name] as boolean}
		/>
	);
};

export type FormikTextFieldProps = TextFieldProps & {
	name: string;
	title?: ReactNode;
	formikApi?: FormikApiType;
	typographyProps?: TypographyProps;
	containerProps?: StackProps;
};

export const FormikTextfield: FC<FormikTextFieldProps> = ({
	name,
	title,
	formikApi,
	typographyProps: { sx: typographySx, ...typographyProps } = {},
	containerProps,
	...props
}) => {
	return (
		<Stack direction="column" {...containerProps}>
			{title ? (
				<Typography sx={{ marginBottom: 1.25, color: 'grey.800', ...typographySx }} variant="body2" {...typographyProps}>
					{title}
					{props.required ? '*' : ''}
				</Typography>
			) : null}
			{formikApi ? (
				<TextInputWithFormikApi name={name} api={formikApi} SelectProps={{ IconComponent: KeyboardArrowDownIcon }} {...props} />
			) : (
				<Field name={name} component={TextInputWithFormikField} SelectProps={{ IconComponent: KeyboardArrowDownIcon }} {...props} />
			)}
		</Stack>
	);
};
