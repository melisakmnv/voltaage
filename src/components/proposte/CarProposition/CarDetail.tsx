import { FC, ReactNode } from 'react';
import { Stack, Typography, Box } from '@mui/material';

interface CarDetailProps {
	icon: ReactNode;
	info: string;
	capitalize?: boolean;
}

export const CarDetail: FC<CarDetailProps> = ({ icon, info, capitalize }) => {
	return (
		<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1.25}>
			{icon}
			<Box>
				<Typography variant="caption" sx={{ textTransform: capitalize ? 'capitalize' : 'none', letterSpacing: '0.04em' }}>
					{info}
				</Typography>
			</Box>
		</Stack>
	);
};
