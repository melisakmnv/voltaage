import { FC, SetStateAction } from 'react';
import { Box, Stack, Button, CardActions, CardMedia, CardContent, Divider, Link, Typography, TextField } from '@mui/material';
import { styled } from '@mui/system';
import mercedes from '../../../../assets/cars/Mercedes-EQA.png';
import roll from '../../../../assets/illustrations/roll.png';

interface LearnMoreFormProps {
	step: number;
	setStep: React.Dispatch<SetStateAction<number>>;
}

export const DiscoverForm: FC<LearnMoreFormProps> = ({ step, setStep }) => {
	function renderStep() {
		switch (step) {
			case 0:
				return (
					<>
						<CardContent sx={{ px: '2rem' }}>
							<Stack
								component={'form'}
								direction={'row'}
								justifyContent={'space-between'}
								px={'3rem'}
								py={'1rem'}
								gap={'3rem'}
							>
								<Stack gap={'1rem'}>
									<TextFieldModal label="Il tuo Nome e Cognome" />
									<TextFieldModal label="Email" />
								</Stack>
								<Stack justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
									<CardMedia
										component="img"
										title=""
										image={mercedes}
										sx={{
											objectFit: 'contain',
											alignSelf: 'center',
										}}
									/>
									<Typography variant="subtitle2">Mercedes EQA</Typography>
								</Stack>
							</Stack>
						</CardContent>
						<Divider style={{ width: '75%' }} />
						<CardActions>
							<Button
								/* type="submit" */
								variant="contained"
								onClick={() => {
									setStep(step + 1);
								}}
								type="submit"
								sx={{
									display: 'flex',
									justifyContent: 'center',
									padding: '0.5rem 1.5rem',
									textAlign: 'center',
									background: 'black',
									borderRadius: '100vmax',
									color: 'white',
									marginY: '1rem',
								}}
							>
								invia informazioni
							</Button>
						</CardActions>
					</>
				);
			case 1:
				return (
					<>
						<CardContent sx={{ px: '2rem' }}>
							<Stack direction={'row'} justifyContent={'space-between'} py={'1rem'} gap={'2rem'}>
								<Box>
									<CardMedia
										component="img"
										title=""
										image={roll}
										sx={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain',
											alignSelf: 'center',
										}}
									/>
								</Box>
								<Stack gap={'1rem'}>
									<Typography variant="subtitle2">Veicolo in arrivo</Typography>
									<Typography variant="body2">
										Apri la tua mail per scoprire maggiori informazioni sul tuo nuovo veicolo
									</Typography>
									<Divider />
									<Typography variant="body2">
										è stato provato scientificamente che ascolatare la nuova{' '}
										<Link underline="none" sx={{ color: '#6176F4' }}>
											Leasys Playlist
										</Link>{' '}
										aspettando il farà sentire 100% elettrico.
									</Typography>
								</Stack>
							</Stack>
						</CardContent>
					</>
				);
			default:
				console.log(Error);
				throw new Error('Unknown step');
		}
	}

	return <>{renderStep()}</>;
};

const TextFieldModal = styled(TextField)`
	width: 16rem;
	border-radius: 0.5rem;
	bordercolor: '#00000';
`;
