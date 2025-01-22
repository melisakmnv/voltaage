import { useState, SetStateAction, FC } from 'react';
import { Box, Typography, Modal, Card, Stack, IconButton, Grid } from '@mui/material';
import { CloseIcon } from '../../icons';
import './DiscoverMore.css';
import { Proposition, DiscoverModal } from './';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100vw',
	height: '100vh',
	bgcolor: 'white',
};

interface DiscoverMoreProps {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const DiscoverMore: FC<DiscoverMoreProps> = ({ open, setOpen }) => {

	const [openForm, setOpenForm] = useState<boolean>(false);
	const [step, setStep] = useState<number>(0);

	const handleOpenForm = () => setOpenForm((prev) => !prev);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Card sx={style}>
					<Stack borderBottom={2} borderColor={'rgba(0, 0, 0, 0.2)'} alignItems={'center'} padding={2.5}>
						<Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
							<Typography variant="h4" color="initial" fontWeight={700}>Il tuo futuro con Mercedes :</Typography>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</Stack>
					</Stack>
					<Grid container padding={2}>
						<Grid item xs={3} maxHeight={'85vh'}>
							<Box height={'50px'}></Box> {/*  <-- To replicate the space taked by "Altre soluzioni di acquisto" */}
							<Grid item xs={12} height={'90%'} px={1}>
								<Proposition main={true} handleOpenForm={handleOpenForm} />
							</Grid>
						</Grid>

						<Grid item xs={9} maxHeight={'85vh'}>
							<Box height={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
								<Typography variant="h6" color="initial" fontWeight={500}>
									Altre soluzioni di acquisto
								</Typography>
							</Box>
							<Grid container height={'90%'}>
								<Grid item xs={4} px={1}>
									<Proposition main={false} />
								</Grid>
								<Grid item xs={4} px={1}>
									<Proposition main={false} />
								</Grid>
								<Grid item xs={4} px={1}>
									<Proposition main={false} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Modal>
			{openForm && <DiscoverModal open={openForm} setOpen={setOpenForm} step={step} setStep={setStep} />}
		</div>
	);
};
