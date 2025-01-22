import { TextField, Typography, Stack, Autocomplete } from "@mui/material"
import { FC } from "react"

interface CityInputProps {
	city?: string | null,
	handleChangeCityInput: (_event: any, newValue: string | null) => void
}

export const CityInput: FC<CityInputProps> = ({ city, handleChangeCityInput }) => {

	const cities = ["parigi", "torino", "new-york", "palermo", "milano"]

	return (
		<>
			<Stack>
				<Typography lineHeight={"14.63px"} variant="caption">Conoscere la zona in cui ti muovi maggiormente ci aiuta a fornirti un risultato più accurato sulla copertura della tua zona</Typography>
				<Autocomplete options={cities} renderInput={(params) => <TextField {...params}
					hiddenLabel
					placeholder="Corso Stati Uniti, Torino"
					variant="standard" />}
					value={city}
					onChange={handleChangeCityInput}
				/>
			</Stack>
		</>
	)
}
