import { FC } from "react";
import { Stack, Typography, Box, Slider } from "@mui/material"
import { styled } from '@mui/material/styles';
import { formatKm } from "@utils/fakeData/helper"


interface KmInputProps {
	kmPerYear: number,
	handleChangeSlider: (event: Event, value: number | number[]) => void
}

export const KmInput: FC<KmInputProps> = ({ kmPerYear, handleChangeSlider }) => {
	const MIN = 0
	const MAX = 100000


	return (
		<Stack>
			<Typography variant="caption">In media un italiano percorre ca. 30 km al giorno</Typography>
			<Stack mt={1}>
				<Box textAlign={'right'}>
					<Typography variant="subtitle2" color="#4FEADF">
						{formatKm(kmPerYear)} km/anno
					</Typography>
					<Typography variant="caption" color="#9A9A9A">
						ca. {Math.round(kmPerYear / 270)} km/giorno
					</Typography>
				</Box>
				<CustomSlider
					size="medium"
					min={MIN}
					max={MAX}
					aria-label="Small"
					valueLabelDisplay="auto"
					value={kmPerYear}
					onChange={handleChangeSlider}
				/>
				<Stack direction={"row"} justifyContent={'space-between'}>
					<Typography variant="caption" color="#9A9A9A">
						{MIN} km/anno
					</Typography>
					<Typography variant="caption" color="#9A9A9A">
						{formatKm(MAX)} km/anno
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	)
}


// CUSTOM SLIDER // 

const CustomSlider = styled(Slider)({
	color: '#FFFFFF',
	height: 4,
	'& .MuiSlider-track': {
		border: 'none',
		color: '#6435F4',
	},
	'& .MuiSlider-rail': {
		backgroundColor: '#FFFFFF',
		opacity: 0.8,
	},
	'& .MuiSlider-thumb': {
		height: 24,
		width: 24,
		backgroundColor: "none",
		backgroundImage: 'linear-gradient(135deg, #17EAD9 0%, #6176F4 100%)',
		border: '2px solid currentColor',
		boxShadow: 'none',
		'&:hover': {
			boxShadow: '-6px -6px 20px rgba(79, 234, 223, 0.15), 6px 6px 20px rgba(97, 118, 244, 0.3)'
		},
		transition: "none"
	},
	'& .Mui-focusVisible': {
		boxShadow: 'none',
	},
	'& .MuiSlider-valueLabel': {
		lineHeight: 1.2,
		fontSize: 12,
		padding: 8,
		backgroundColor: '#6435F4',
	},
});
