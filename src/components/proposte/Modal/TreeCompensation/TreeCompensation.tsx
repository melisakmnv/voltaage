import { FC } from "react"
import { Stack, Typography } from "@mui/material"
import { TreeIllustration } from "../../../icons"

interface TreeCompensationProps {
	value: number,
	co2Total: number,
}
export const TreeCompensation: FC<TreeCompensationProps> = ({ value, co2Total }) => {
	return (
		<Stack alignItems={"center"} gap={5} py={5.5}>
			<TreeIllustration />
			<Typography variant="h6">Servono <span style={{ fontWeight: "600" }}>{value} alberi</span> per compensare <span style={{ fontWeight: "600" }}>{co2Total}</span> all’anno.</Typography>
		</Stack>
	)
}
