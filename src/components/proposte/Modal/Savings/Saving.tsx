import { FC } from "react"
import { Stack, Typography } from "@mui/material"
import { GasIcon, LightningIcon, RefillIcon } from "../../../icons"
import { Price } from "./Price"
import { formatElectricityPrice } from "@utils/fakeData/helper"

interface SavingProps {
	electicityCost: number
}

export const Saving: FC<SavingProps> = ({ electicityCost }) => {


	return (
		<Stack alignItems={"center"}>
			<Typography variant="h5" fontWeight={600} textAlign={"center"}>Vuoi vedere come cambiano i tuoi risparmi con una colonnina e pannelli solari?</Typography>
			<Stack direction={"row"} justifyContent={"center"} gap={8} py={5.5}>
				<Price value={(formatElectricityPrice(electicityCost))} unit={"kWh"} description={"Prezzo dell’energia"} icon={<LightningIcon />} />
				<Price value={"1,801"} unit={"litro"} description={"Prezzo della gasolio"} icon={<GasIcon />} />
				<Price value={"1,896"} unit={"litro"} description={"Prezzo del benzina"} icon={<RefillIcon />} />
			</Stack>
		</Stack>
	)
}

