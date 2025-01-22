import { Stack, Typography, Box } from "@mui/material";
import { FC } from "react"


interface ServiceDetailsProps {
	service: {
		id: number,
		image: string,
		serviceTitle: string,
		description: string,
		prevalidated: boolean
	}
}

export const ServiceDetails: FC<ServiceDetailsProps> = ({ service }) => {
	return (
		<Stack gap={5}>
			<Stack justifyContent={"center"} alignItems={"center"}>
				<Box width={200} component="img" src={service.image} alt={service.serviceTitle} />
			</Stack>
			<Typography variant="body2" lineHeight={"24px"} textAlign={"justify"}>{service.description}</Typography>
		</Stack>
	)
}

