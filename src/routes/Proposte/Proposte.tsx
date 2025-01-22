import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Stack, Typography, Tabs, TabProps, Tab } from '@mui/material';

// COMPONENTS //
import { LogoIcon } from '@components/icons';
import { Result, FormStepper, NoResult } from '@components/proposte';
import { IVehicleInputValues } from '@models/proposte';

// HELPER //
import { carData, stations } from '@utils/fakeData';

// import Lottie from 'lottie-react';
// import magicLoading from '../../assets/animations/magic-loading.json';
// import pulseLoading from '../../assets/animations/pulse-loading.json';
// import fireworkLoading from '../../assets/animations/firework-loading.json';
// import { Test } from '@components/Proposte v1/FormStepper/Test';

export const Proposte = () => {
	// USESTATE //

	const [isFilled, setIsFilled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [tabValue, setTabValue] = useState(0);

	const [fakeData, setFakeData] = useState<any[]>([]);
	const [fakeStations, setFakeStations] = useState<any[]>([]);
	const [vehicleInputs, setVehicleInput] = useState<IVehicleInputValues>({
		vehicleBrand: null,
		vehicleModel: null,
		vehicleVersion: null,
	});
	const [city, setCity] = useState<string | null>(null);
	const [roadType, setRoadType] = useState<string | null>(null);
	const [kmPerYear, setKmPerYear] = useState<number>(0);

	const [togglePanelSolar, setTogglePanelSolar] = useState<boolean>(false);
	const [toggleWallBox, setToggleWallBox] = useState<boolean>(false);

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);

	const fetchFakeDate = () => {
		setFakeData(carData);
		setFakeStations(stations);
	};

	useEffect(() => {
		const controlToggleOff = () => {
			if (toggleWallBox === false) setTogglePanelSolar(false);
		};
		controlToggleOff();
	}, [toggleWallBox]);

	useEffect(() => {
		const controlToggleOn = () => {
			if (togglePanelSolar === true) setToggleWallBox(true);
		};
		controlToggleOn();
	}, [togglePanelSolar]);

	useEffect(() => {
		const verifyInputs = () => {
			if (
				vehicleInputs.vehicleBrand !== null &&
				vehicleInputs.vehicleModel !== null &&
				vehicleInputs.vehicleVersion !== null &&
				kmPerYear !== 0 &&
				roadType !== null &&
				city !== null
			) {
				setIsLoading(true);
				fetchFakeDate();
				setTimeout(() => {
					setIsFilled(true);
					setIsLoading(false);
				}, 1500);
			} else {
				setIsFilled(false);
			}
		};
		verifyInputs();
	}, [vehicleInputs, kmPerYear, roadType, city]);

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
		typography: {
			fontFamily: 'Montserrat',
		},
	});

	const filteredVehicles = fakeData.filter((filteredCar: any) => {
		if (vehicleInputs.vehicleBrand === null || vehicleInputs.vehicleModel === null || vehicleInputs.vehicleVersion === null)
			return null;
		return filteredCar.compatible.brand.includes(vehicleInputs.vehicleBrand);
	});

	const filteredStations = fakeStations.filter((filteredStation: any) => {
		if (city === null) return null;
		return filteredStation.city === city.toLowerCase();
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid sx={{ background: '#242424' }} container height={'100vh'}>
				<Grid sx={{ background: isFilled ? 'none' : '#343434' }} item xs={12} sm={12} md={4} pl={4} pr={4} py={3}>
					<Stack height={'100%'} border={0}>
						<Stack spacing={2.25}>
							<LogoIcon />
							<Typography variant="h1" sx={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF' }}>
								Parlaci del veicolo che desideri
							</Typography>
						</Stack>
						<FormStepper
							toggleWallBox={toggleWallBox}
							setToggleWallBox={setToggleWallBox}
							vehicleInputs={vehicleInputs}
							setVehicleInput={setVehicleInput}
							roadType={roadType}
							setRoadType={setRoadType}
							kmPerYear={kmPerYear}
							setKmPerYear={setKmPerYear}
							city={city}
							setCity={setCity}
						/>
						{/* <Test/> */}
					</Stack>
				</Grid>

				<Grid item xs={12} sm={12} md={8} position={'relative'} pr={4} py={3}>
					{isLoading ? (
						// <Lottie style={loadingStyle} animationData={fireworkLoading} loop={true} />
						<Stack direction={"column"} justifyContent={"center"} sx={{ height: "100%" }}>
							<Typography textAlign={"center"} variant="h1" sx={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF' }}>Loading....</Typography>
						</Stack>
					) : isFilled ? (
						// <Stack position={"relative"} sx={{height: '100%'}}>
						<Stack position={'relative'} sx={{ height: '100%' }}>
							<Typography variant="h1" sx={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF' }}>
								Le nostre proposte EV
							</Typography>
							<Tabs
								TabIndicatorProps={{
									style: { display: 'none' },
								}}
								value={tabValue}
								onChange={handleTabChange}
								sx={{
									p: '4px',
									my: '9px',
									display: 'flex',
									width: '49.5%',
									borderRadius: '100vmax',
									outline: '2px solid #444444',
									gap: '1rem',
									background: '#2f2f2f',
									textTransform: 'uppercase',
									minHeight: 'unset',
									overflow: 'visible',
								}}
							>
								<CarTab value={0} label="Full electric" />
								<CarTab value={1} label="Dual fuel" disabled />
							</Tabs>

							{filteredVehicles.map((car, index) => {
								return (
									<Result
										key={car.id}
										value={tabValue}
										car={car}
										i={index}
										roadType={roadType}
										kmPerYear={kmPerYear}
										wallBox={toggleWallBox}
										panelSolar={togglePanelSolar}
										onToggle={setTogglePanelSolar}
										station={filteredStations[0].station}
									/>
								);
							})}
						</Stack>
					) : (
						<NoResult />
					)}
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

const CarTab = styled(Tab)<TabProps>(() => ({
	width: '50%',
	color: '#6d6d6d',
	fontWeight: '700',
	fontSize: '11px',

	'&.MuiButtonBase-root': {
		padding: '8px',
		minHeight: 'unset',
	},

	'&.Mui-selected': {
		color: 'white',
		background: '#6176F4',
		borderRadius: '100vmax',
		border: '2px solid #7184f5',
	},
	'&:disabled': {
		cursor: 'not-allowed',
		pointerEvents: 'all',
	},
}));

// const loadingStyle = {
// 	position: 'absolute',
// 	height: 400,
// 	top: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// } as React.CSSProperties;
