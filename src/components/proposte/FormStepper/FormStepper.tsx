import React, { useState, useEffect, FC, SetStateAction } from 'react';
import { Box, Divider, Stepper, Step, StepLabel, StepContent, Stack, Typography, FormControlLabel } from '@mui/material';
import { CarModelInput, CityInput, RoadTypeInput, KmInput } from './Inputs';
import { SwitchButton } from './Inputs/SwitchButton';

interface FormStepperProps {
	vehicleInputs: {
		vehicleBrand: string | null;
		vehicleModel: string | null;
		vehicleVersion: string | null;
	};
	kmPerYear: number;
	roadType: string | null;
	city: string | null;
	toggleWallBox: boolean;
	setVehicleInput: React.Dispatch<
		SetStateAction<{
			vehicleBrand: string | null;
			vehicleModel: string | null;
			vehicleVersion: string | null;
		}>
	>;
	setRoadType: React.Dispatch<SetStateAction<string | null>>;
	setCity: React.Dispatch<SetStateAction<string | null>>;
	setKmPerYear: React.Dispatch<SetStateAction<number>>;
	setToggleWallBox: React.Dispatch<SetStateAction<boolean>>;
}

export const FormStepper: FC<FormStepperProps> = ({
	vehicleInputs,
	setVehicleInput,
	kmPerYear,
	setKmPerYear,
	roadType,
	setRoadType,
	city,
	setCity,
	toggleWallBox,
	setToggleWallBox,
}) => {
	const [activeStep, setActiveStep] = useState(0);
	const [isFilled, setIsFilled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// HANDLER //
	const handleResetCarModelInputField = () => {
		setVehicleInput({
			vehicleBrand: null,
			vehicleModel: null,
			vehicleVersion: null,
		});
		setIsFilled(false);
		setActiveStep(0);
		setKmPerYear(0);
		setRoadType(null);
		setCity(null);
		console.log('removed !');
	};

	const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => setToggleWallBox?.(event.target.checked);
	const handleChangeSlider = (_event: Event, value: number | number[]) => setKmPerYear(value as number);
	const handleChangeCityInput = (_event: any, newValue: string | null) => setCity(newValue as string);
	const handleStradeChange = (_event: React.MouseEvent<HTMLElement>, updatedStrade: string | null) => setRoadType(updatedStrade);

	useEffect(() => {
		const checkCarModelInputField = () => {
			if (vehicleInputs.vehicleBrand !== null && vehicleInputs.vehicleModel !== null && vehicleInputs.vehicleVersion !== null) {
				setIsLoading(true);
				setTimeout(() => {
					setIsLoading(false);
					setIsFilled(true);
					setActiveStep((prevActiveStep) => prevActiveStep + 1);
				}, 1000);
			}
		};
		checkCarModelInputField();
	}, [vehicleInputs]);

	useEffect(() => {
		const checkSliderInputField = () => {
			if (kmPerYear !== 0) {
				setTimeout(() => {
					setActiveStep((currentStep) => (currentStep = 2));
				}, 500);
			}
		};
		checkSliderInputField();
	}, [kmPerYear]);

	useEffect(() => {
		const checkStradeInputField = () => {
			if (roadType !== null) {
				setTimeout(() => {
					setActiveStep((prevActiveStep) => (prevActiveStep = 3));
				}, 500);
			}
		};
		checkStradeInputField();
	}, [roadType]);

	const steps = [
		{
			label: 'il veicolo che desideri',
			component: (
				<CarModelInput
					vehicleInputs={vehicleInputs}
					setVehicleInput={setVehicleInput}
					isFilled={isFilled}
					isLoading={isLoading}
					onReset={handleResetCarModelInputField}
				/>
			),
		},
		{
			label: 'Quanti km percorri in media all’anno?',
			component: <KmInput kmPerYear={kmPerYear} handleChangeSlider={handleChangeSlider} />,
		},
		{
			label: 'Che strade percorri maggiormente?',
			component: <RoadTypeInput value={roadType} handleStradeChange={handleStradeChange} />,
		},
		{
			label: 'Dove vivi?',
			component: <CityInput city={city} handleChangeCityInput={handleChangeCityInput} />,
		},
	];

	return (
		<Box component={'form'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
			<Divider sx={{ visibility: 'hidden' }} />

			<Stepper
				activeStep={activeStep}
				orientation="vertical"
				sx={{
					height: '80%',
					display: 'flex',

					'& .MuiStepConnector-line': {
						border: '0px',
						borderLeft: '4px solid',
						borderImage: 'linear-gradient(to bottom, #2fdddc, #528cee)',
						borderImageSlice: '1',
						marginLeft: '-2px',
						height: '122%',
						zIndex: 9999,
					},

					'& .MuiStep-vertical:last-child .MuiStepContent-root': {
						border: 0,
					},

					'& .MuiStep-root .MuiStepConnector-vertical': {
						display: 'none',
					},
					'& .MuiCollapse-wrapperInner': {
						marginBlockStart: '1.5rem',
						marginLeft: '9px',
					},

					'& .MuiStepIcon-root.Mui-completed, .MuiStepIcon-root.Mui-active, .MuiStepIcon-text': {
						color: 'white',
						fill: 'white',
					},
					'& .MuiStepLabel-root ': {
						gap: '1rem',
					},
				}}
			>
				{steps.map((step, index) => (
					<Step key={index} disabled={activeStep === index ? false : activeStep > index ? false : true}>
						<StepLabel
							sx={{
								p: 0,
								marginBottom: '-10px',
								'& .MuiSvgIcon-root': {
									marginLeft: '7px',
									width: '10px',
									color: 'white',
								},
							}}
						>
							{step.label}
						</StepLabel>
						<StepContent
							TransitionProps={{ in: true }}
							sx={{
								border: '0px',
								borderLeft: '4px solid',
								borderImage: 'linear-gradient(to bottom, #2fdddc, #2fdddc)',
								borderImageSlice: '1',
								marginLeft: '10px',
							}}
						>
							{step.component}
						</StepContent>
					</Step>
				))}
			</Stepper>

			<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
				<Typography variant="body2" sx={{ fontWeight: '500', paddingLeft: '30px', py: 2 }}>
					Posso installare una wallbox a casa
				</Typography>
				<FormControlLabel label={''} control={<SwitchButton toggle={toggleWallBox} handleToggle={handleToggle} />} />
			</Stack>

			{/* sx={{ visibility: allInputsFilled ? "visible" : "hidden" }} */}
		</Box>
	);
};
