import { Grid, Slider, SliderProps, Stack, Typography } from '@mui/material';
import { FC } from 'react';

const numberFormat = (number: number, opts?: Intl.NumberFormatOptions): string => {
	return new Intl.NumberFormat('it', opts).format(number);
};

interface IConfiguratorSliderProps extends SliderProps {
	unit?: string;
	value: number;
}

export const ConfiguratorSlider: FC<IConfiguratorSliderProps> = ({ title, unit, value, sx, ...props }) => {
	return (
		<Stack direction="column" sx={{ marginTop: 3 }}>
			<Grid container justifyContent="space-between" alignItems="flex-end">
				<Grid item>
					{title ? (
						<Typography variant="body1" sx={{ fontWeight: 600 }}>
							{title}
						</Typography>
					) : null}
				</Grid>
				<Grid item>
					<Stack direction="row" alignItems="flex-end">
						<Typography variant="body1" sx={{ fontSize: 40, fontWeight: 600, lineHeight: '1' }}>
							{numberFormat(value)}
						</Typography>
						{unit && (
							<Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '1.7', marginLeft: 0.5 }}>
								{unit}
							</Typography>
						)}
					</Stack>
				</Grid>
			</Grid>

			<Slider
				value={value}
				sx={{
					...sx,
					height: 8,
					marginY: 3,
					paddingY: 2,
					borderRadius: '6px',
					'.MuiSlider-rail': { color: 'common.white', opacity: 0.28 },
					'.MuiSlider-thumb': { width: 40, height: 40, backgroundColor: 'common.white' },
				}}
				{...props}
			/>
		</Stack>
	);
};
