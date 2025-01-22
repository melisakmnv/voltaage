import { FormControlLabel, Grid, Radio, RadioGroup, RadioGroupProps, Stack, Typography } from '@mui/material';
import { FC } from 'react';

export interface IConfiguratorRoadTypeSelectionProps extends RadioGroupProps {
	value: 'city' | 'mixed';
}

export const ConfiguratorRoadTypeSelection: FC<IConfiguratorRoadTypeSelectionProps> = ({ title, value, sx, ...props }) => {
	return (
		<Stack direction="column" sx={{ marginTop: 3 }}>
			{title ? (
				<Typography variant="body1" sx={{ fontWeight: 600 }}>
					{title}
				</Typography>
			) : null}

			<RadioGroup row value={value} sx={{ marginTop: 3.5, ...sx }} {...props}>
				<Grid container>
					<Grid item xs={6}>
						<FormControlLabel value="city" control={<Radio />} label="Urbane" />
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel value="mixed" control={<Radio />} label="Miste" />
					</Grid>
				</Grid>
			</RadioGroup>
		</Stack>
	);
};
