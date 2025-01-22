import { FC, forwardRef } from 'react';
import NumberFormat, { InputAttributes, NumberFormatProps } from 'react-number-format';
import { FormikTextfield, FormikTextFieldProps } from '../FormikTextfield';

interface CustomProps {
	onChange: (event: { target: { name: string; value: number } }) => void;
	name: string;
}

const NumberFormatCustom = forwardRef<NumberFormat<InputAttributes>, CustomProps>((props, ref) => {
	const { onChange, ...other } = props;

	return (
		<NumberFormat<InputAttributes>
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: +values.value
					}
				});
			}}
		/>
	);
});

export const FormikNumber: FC<FormikTextFieldProps & { format?: NumberFormatProps }> = ({ format, ...props }) => {
	return (
		<FormikTextfield
			{...props}
			type="text"
			InputProps={{
				inputComponent: NumberFormatCustom as any,
				inputProps: format
			}}
		/>
	);
};
