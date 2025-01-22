import { FC, ReactNode } from "react"
import { Stack, Typography, Box } from "@mui/material"

interface PriceProps {
	value: number | string,
	unit: string,
	description: string,
	icon: ReactNode

}
export const Price: FC<PriceProps> = ({ value, unit, description, icon }) => {
	return (
		<Stack alignItems={"center"}>
			<Box mb={1}>
				{icon}
			</Box>
			<Stack direction={"row"} alignItems={"baseline"}>
				<Typography variant="h6" fontWeight={700}>{value}</Typography>
				<Typography variant="caption" fontWeight={500}>&nbsp;€ / {unit}</Typography>
			</Stack>
			<Typography variant="caption" color={"#6B6B6B"}>{description}</Typography>
		</Stack>
	)
}
