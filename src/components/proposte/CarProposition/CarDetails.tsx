import { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { BateryIcon, DoorIcon, GearIcon, RechargeIcon, SeatIcon, SmallRoadIcon, SpeedIcon } from '../../icons';
import { CarDetail } from './';

interface CarDetailsProps {
	details: {
		seat: number;
		door: number;
		rechargeLast: number;
		consumption: number;
		speed: number;
		gear: string;
		consumptType: string;
	};
}
export const CarDetails: FC<CarDetailsProps> = ({ details }) => {
	return (
		<>
			<Stack paddingX={1.25} paddingTop={2.5} paddingBottom={0}>
				<Stack
					direction={'row'}
					alignItems={'center'}
					spacing={1.25}
					paddingX={1.25}
					paddingBottom={1}
					borderBottom={'1px solid #444'}
				>
					<Typography variant="caption" sx={{ color: '#979797' }}>
						Informazioni Generali:
					</Typography>
				</Stack>

				<Grid container py={2.5} justifyContent="center" rowSpacing={2.5}>
					<Grid item xs={2}>
						<CarDetail icon={<SeatIcon />} info={`${details.seat}`} />
					</Grid>
					<Grid item xs={2}>
						<CarDetail icon={<DoorIcon />} info={`${details.door}`} />
					</Grid>
					<Grid item xs={4}>
						<CarDetail icon={<BateryIcon />} info={`${details.rechargeLast} km`} />
					</Grid>
					<Grid item xs={4}>
						<CarDetail icon={<SmallRoadIcon />} info={`${details.speed} Wh/km`} />
					</Grid>
					<Grid item xs={4}>
						<CarDetail icon={<SpeedIcon />} info={`${details.consumption} km/h`} />
					</Grid>
					<Grid item xs={4}>
						<CarDetail icon={<RechargeIcon />} info={details.gear} capitalize={true} />
					</Grid>
					<Grid item xs={4}>
						<CarDetail icon={<GearIcon />} info={details.consumptType} capitalize={true} />
					</Grid>
				</Grid>
			</Stack>
		</>
	);
};
