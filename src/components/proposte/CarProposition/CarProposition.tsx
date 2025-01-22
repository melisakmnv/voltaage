import { FC } from 'react';
import { Card, CardContent, Stack, Typography, Chip } from '@mui/material';
import { HeartIcon } from '../../icons';
import { CarDetails, CarSlider } from './';

interface CarPropositionProps {
	title: string;
	model: string
	details: {
		seat: number;
		door: number;
		rechargeLast: number;
		consumption: number;
		speed: number;
		gear: string;
		consumptType: string;
	};
	albums: string[]
}
export const CarProposition: FC<CarPropositionProps> = ({ title, details, albums, model }) => {
	return (
		<Card variant="outlined" sx={{ backgroundColor: '#2f2f2f', borderRadius: '10px', borderColor: 'grey.700', height: '100%' }}>
			<CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<Stack
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					marginX={1.25}
					paddingTop={1.5}
					paddingBottom={1.25}
					borderBottom={'1px solid #444'}
				>
					<Stack direction={'row'} alignItems={'center'} spacing={1.25} paddingX={1.25}>
						<Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
							{title} {model}
						</Typography>
						<Chip label="GREEN" size="small" icon={<HeartIcon />} sx={{ p: "5px 5px", bgcolor: "#415435", color: "#8AEA4F", fontSize: "10px", fontWeight: 700, letterSpacing: " 0.12em" }} />
					</Stack>
				</Stack>
				<CarSlider vehicleTitle={title} albums={albums} />
				<CarDetails details={details} />
			</CardContent>
		</Card>
	);
};
