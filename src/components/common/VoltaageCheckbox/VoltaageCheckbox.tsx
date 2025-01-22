import { forwardRef } from 'react';
import { Checkbox, CheckboxProps } from '@mui/material';
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from '@components/icons';

export const VoltaageCheckbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ ...props }, ref) => {
	return (
		<Checkbox
			ref={ref}
			sx={{ width: 56, height: 56 }}
			checkedIcon={<CheckboxCheckedIcon />}
			icon={<CheckboxUncheckedIcon />}
			{...props}
		/>
	);
});
