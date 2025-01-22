import { SetStateAction, FC } from 'react';
import { Typography, Button, Fade, Modal, Box, Backdrop, Card, CardContent, Stack, IconButton } from '@mui/material/';
import { CloseIcon, InfoIcon } from '../../icons';
import { CarSliderDetails } from '../Modal';

interface CarModalProps {
	photoIndex: number;
	previous: () => void;
	next: () => void;
	open: boolean;
	onOpen: React.Dispatch<SetStateAction<boolean>>;
	albums: string[];
	vehicleTitle: string;
	value?: number;
}

export const CarModal: FC<CarModalProps> = ({ open, onOpen, albums, vehicleTitle, previous, next, photoIndex }) => {
	// const ids = {
	// 	SAVINGS: 'savings',
	// 	TREE_COMPENSATION: 'tree compensation',
	// 	CAR_SLIDER: 'car slider',
	// };
	const MODAL_HEADER = {
		common: 'Dimmi di più',
		carModal: (
			<span style={{ fontWeight: 400 }}>
				dettagli del veicolo <span style={{ fontWeight: 700 }}>Il piacere di guidare un veicolo elettrico</span>
			</span>
		),
	};

	const handleClose = () => onOpen(false);
	return (
		<Box>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Card sx={style} variant="outlined">
						<CardContent sx={{ p: 0, '&:last-child': { pb: 0 }, height: 'fit-content' }}>
							<Stack borderBottom={2} borderColor={'rgba(0, 0, 0, 0.2)'} alignItems={'center'} padding={2.5}>
								<Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
									<Stack direction={'row'} alignItems={'center'} spacing={1.25}>
										<InfoIcon size={16} color="#242424" />
										<Typography variant="subtitle2" sx={modalHeader}>
											{MODAL_HEADER.carModal}
										</Typography>
									</Stack>
									<IconButton onClick={handleClose} color={'primary'}>
										<CloseIcon />
									</IconButton>
								</Stack>
							</Stack>
							<Stack p={8} alignItems={'center'} justifyContent={'center'} gap={8}>
								<CarSliderDetails
									photoIndex={photoIndex}
									albums={albums}
									vehicleTitle={vehicleTitle}
									next={next}
									previous={previous}
								/>
								<Button
									variant="contained"
									onClick={handleClose}
									sx={{
										display: 'flex',
										p: '5px 1.5rem ',
										justifyContent: 'space-between',
										borderRadius: '100vmax',
										color: 'white',
										background: 'linear-gradient(135deg, #8B62FD 0%, #6435F4 100%)',
										boxShadow: '0px 10px 24px -8px rgba(139, 98, 253, 0.5)',
									}}
								>
									chiudi
								</Button>
							</Stack>
						</CardContent>
					</Card>
				</Fade>
			</Modal>
		</Box>
	);
};

const style = {
	width: '70%',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'white',
	color: 'black',
	boxShadow: 24,
	border: 'none',
	borderRadius: 2,
};

const modalHeader = {
	textTransform: 'uppercase',
	color: '#242424',
	fontWeight: 700,
	lineHeight: '16px',
	letterSpacing: '0.08em',
};
