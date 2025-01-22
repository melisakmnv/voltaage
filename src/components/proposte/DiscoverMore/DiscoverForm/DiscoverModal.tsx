import { FC, SetStateAction } from 'react';
import { Modal, Card, CardHeader, IconButton, Divider } from '@mui/material';
import { DiscoverForm } from '.';
import { CloseIcon } from '../../../icons';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface DiscoverModalProps {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	step: number;
	setStep: React.Dispatch<SetStateAction<number>>;
}
export const DiscoverModal: FC<DiscoverModalProps> = ({ open, setOpen, step, setStep }) => {
	const handleClose = () => setOpen(false);

	const lightTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />

			<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Card
					sx={{
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						bgcolor: 'white',
						borderRadius: '1rem',
						boxShadow: 24,
						width: 600,
					}}
				>
					<CardHeader
						title={step === 0 ? 'Il tuo nuovo veicolo elettrico è già pronto 🤩' : 'Domanda Inviata'}
						sx={{
							paddingX: '2rem',
							textAlign: 'center',
							width: '100%',
							fontSize: '10px',
						}}
						action={
							<IconButton
								aria-label="settings"
								onClick={() => {
									setOpen(false);
								}}
							>
								<CloseIcon />
							</IconButton>
						}
					/>
					<Divider style={{ width: '100%' }} />
					<DiscoverForm step={step} setStep={setStep} />
				</Card>
			</Modal>
		</ThemeProvider>
	);
};
