import { FC } from 'react';
import { Stack, Box, Typography, Grid, IconButton } from '@mui/material';
import { NextIcon, PreviousIcon } from '@components/icons';
import './CarSliderDetails.scss';

interface CarSliderDetailsProps {
	photoIndex: number;
	previous: () => void;
	next: () => void;
	vehicleTitle?: string;
	albums: string[];
}

export const CarSliderDetails: FC<CarSliderDetailsProps> = ({ vehicleTitle, albums, previous, next, photoIndex }) => {
	return (
		<>
			<Grid container>
				<Grid item xs={7} sx={{ textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: "center", height: "20rem", width: 'clamp(100px, 100%, 400px)', overflow: 'hidden' }}>
					<Box
						component="img"
						className="--fadeIn"
						alt={vehicleTitle}
						src={albums[photoIndex - 1]}
						sx={{ objectFit: 'cover', height: '20rem' }}
					/>
				</Grid>
				<Grid item xs={5} sx={{ height: '100%', alignSelf: 'start' }}>
					<Stack gap={4} px={7} alignItems={'start'}>
						<Stack direction={'row'} gap={1}>
							<IconButton onClick={previous} color={"primary"}>
								<PreviousIcon color={photoIndex === 1 ? "#C8CEF4" : "#6176F4"} borderColor={photoIndex === 1 ? "#EDEEF6" : "#D7DCF5"} />
							</IconButton>
							<IconButton onClick={next} color={"primary"}>
								<NextIcon color={photoIndex === albums.length ? "#C8CEF4" : "#6176F4"} borderColor={photoIndex === albums.length ? "#EDEEF6" : "#D7DCF5"} />
							</IconButton>
						</Stack>
						<Stack gap={1}>
							<Typography variant="h5" fontWeight={500}>
								Lorem ipsum
							</Typography>
							<Typography variant="body2" fontWeight={500} letterSpacing={'1%'}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue risus, finibus non pulvinar id,
								congue in orci. Morbi et laoreet velit. Proin viverra posuere ultrices. Morbi condimentum tempus congue.{' '}
							</Typography>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</>
	);
};
