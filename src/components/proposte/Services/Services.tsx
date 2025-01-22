import { FC, useState } from "react"
import { Stack, Card, CardContent, CardHeader, Button, Typography, Checkbox } from "@mui/material"
import { ServiceItem } from "./ServiceItem"
import { ArrowCircleIcon, AddIcon, CheckIcon } from "../../icons"
import { DiscoverMore } from "../DiscoverMore/DiscoverMore"

interface ServicesProps {
	price: number;
	services: {
		id: number;
		image: string;
		serviceTitle: string;
		description: string;
		prevalidated: boolean;
	}[];
}

export const Services: FC<ServicesProps> = ({ price, services }) => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const handleModal = () => setOpenModal((prev) => !prev);

	return (
		<Card
			variant="outlined"
			sx={{
				height: '100%',
				backgroundColor: '#2f2f2f',
				borderRadius: '10px',
				borderColor: 'grey.700',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CardHeader
				title="Quali servizi vuoi aggiungere?"
				titleTypographyProps={{
					variant: 'body2',
					fontSize: '12px',
					fontWeight: 500,
					lineHeight: '14px',
					color: 'rgba(255, 255, 255, 0.5)',
					letterSpacing: '0.04em',
				}}
				sx={{
					borderBottom: 'solid 1px grey',
				}}
			/>
			<CardContent
				className="--scrollbar-hidden"
				sx={{
					p: 2,
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
					overflow: 'auto',
				}}
			>
				<Stack spacing={1.25}>
					{services?.map((service) => {
						return <ServiceItem key={service.id} service={service} />;
					})}
				</Stack>
			</CardContent>
			<Stack direction="row" gap={3.5} alignItems={'center'} justifyContent={'space-between'} px={2} sx={{ height: '30%' }}>
				<Stack gap={1}>
					<Typography variant="caption" fontSize={'12px'} lineHeight={'15px'}>
						A partire da
					</Typography>
					<Typography variant="body1" fontWeight={700} lineHeight={'19.5px'}>
						{' '}
						€ {price}{' '}
						<Typography display="inline" variant="caption">
							/ mese
						</Typography>
					</Typography>
				</Stack>
				<Button
					onClick={handleModal}
					variant="contained"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '160px',
						borderRadius: '100vmax',
						p: '2px 3px 2px 1rem',
						whiteSpace: 'nowrap',
						color: 'white',
						background: 'linear-gradient(135deg, #8B62FD 0%, #6435F4 100%)',
						boxShadow: '0px 10px 24px -8px rgba(139, 98, 253, 0.5)',
					}}
				>
					<span>scopri di più</span>
					<ArrowCircleIcon />
				</Button>
			</Stack>
			{openModal && <DiscoverMore open={openModal} setOpen={setOpenModal} />}
		</Card>
	);
};

const servicesListStyle = {
	background: 'red',
	height: '100%',
	overflow: 'scroll',
};
