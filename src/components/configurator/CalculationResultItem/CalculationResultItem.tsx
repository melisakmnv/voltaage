import { FC, ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

interface ICalculationResultItemProps {
	value: string | number;
	description: string;
	icon?: ReactNode;
	spacing?: number;
}

export const CalculationResultItem: FC<ICalculationResultItemProps> = ({ value, description, icon, spacing }) => {
	return (
		<Stack direction="column" spacing={spacing}>
			{icon}
			<Typography variant="h4" sx={{ fontWeight: 600 }}>
				{value}
			</Typography>
			<Typography variant="body2" sx={{ fontWeight: 500 }}>
				{description}
			</Typography>
		</Stack>
	);
};
