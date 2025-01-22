import React, { useState, FC, SetStateAction, useEffect } from 'react';
import { Grid, Stack, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TreeFullIcon } from '../../icons';
import { ConfigurationName, ICalculationResult, IConfigurationValues } from '@models/proposte';
import { InfoCard, Services, CarProposition } from '../';
import { formatPrice, calculate } from '@utils/fakeData';


interface ResultProps {
	station?: {
		station: number,
	},
	value: number;
	car: any;
	i: any;
	roadType: string | null;
	kmPerYear: number;
	panelSolar: boolean;
	wallBox: boolean;
	onToggle: React.Dispatch<SetStateAction<boolean>>;
}

export const Result: FC<ResultProps> = ({ value, i, car, roadType, kmPerYear, panelSolar, wallBox, onToggle, station }) => {

	const TREE_COMPENSATION = 38.5;
	const FIX_AMOUNT = 18;
	const [config, setConfig] = useState<IConfigurationValues>({
		[ConfigurationName.DAILY_AVERAGE_KM]: 0,
		[ConfigurationName.FUEL_PRICE]: 1.8,
		[ConfigurationName.ELECTRICITY_PRICE_HOME_SOLAR]: 0.1,
		[ConfigurationName.ELECTRICITY_PRICE_HOME_NOSOLAR]: 0.4,
		[ConfigurationName.ELECTRICITY_PRICE_PUBLIC_SLOW]: 0.5,
		[ConfigurationName.ELECTRICITY_PRICE_PUBLIC_FAST]: 0.9,
	});

	const [calculation, setCalculation] = useState<ICalculationResult>({
		electicityCost: 0,
		savings: 0,
		treeConpensation: 0,
		co2Total: 0
	});



	useEffect(() => {
		setCalculation(
			calculate(
				car.co2Consumption,
				car.consumption,
				car.consumption,
				panelSolar,
				wallBox,
				config,
				roadType,
				kmPerYear,
				TREE_COMPENSATION,
				FIX_AMOUNT
			)
		);
	}, [panelSolar, wallBox, config, roadType, kmPerYear, TREE_COMPENSATION, FIX_AMOUNT, car]);


	return (
		<TabPanel value={value} index={i} key={car.id}>
			<Grid container columnSpacing={'10px'} sx={{ height: '100%' }}>
				<ResultColumn item xs={12} sm={6}>
					<CarProposition title={car.vehicleBrand} model={car.vehicleModel} details={car.carDetails} albums={car.albums} />

					<InfoCard
						id="stations spot"
						title={`${station}`}
						unit="Stazioni di ricarica"
						bgColor="#1B1B1B"
						borderRadius="10px"
						lg={true}
					>
						La copertura nella tua zona è ottima! Hai <span style={{ fontWeight: 600 }}>{station} stazioni </span>di ricarica intorno a te&nbsp;
						<Link
							component="button"
							underline="always"
							sx={{
								fontSize: '12px',
								fontWeight: 600,
								fontFamily: 'Montserrat',
								textTransform: 'capitalize',
								color: '#4FE9DF',
								textDecorationColor: '#4FE9DF',
							}}
						>
							Apri la mappa
						</Link>

					</InfoCard>
				</ResultColumn>
				<Grid position={'absolute'} minWidth={'50%'} right={0} top={0} item xs={12} sm={6} height={'100%'}>
					<ResultColumn>
						<Stack spacing={'1.5rem'}>
							<InfoCard
								id="savings"
								title={`€ ${formatPrice(calculation.savings)}`}
								unit="/ anno"
								electicityCost={calculation.electicityCost}
								informative={true}
								extra={true}
								progress={true}
								bgColor="colored"
								borderRadius="10px"
								panelSolar={panelSolar}
								onToggle={onToggle}
							>
								Il risparmio è calcolato rispetto il tuo attuale veicolo o alternativa a benzina.
							</InfoCard>
							<InfoCard
								id="tree compensation"
								icon={<TreeFullIcon />}
								title={`${Math.round(calculation.treeConpensation)}`}
								unit="Alberi"
								informative={true}
								bgColor="#88AF2B"
								borderRadius="16px"
								co2Total={calculation.co2Total}
							>
								per compensare <span style={{ fontWeight: 700 }}>{calculation.co2Total}</span> di CO2 all’anno.
							</InfoCard>
						</Stack>
						<Services price={car.subscription.cost.price} services={car.subscription.services} />
					</ResultColumn>
				</Grid>
			</Grid>
		</TabPanel>
	);
};

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number | string;
	key: number | string;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			sx={{ height: '100%' }}
		>
			{value === index && (
				<Box
					sx={{
						height: '100%',
					}}
				>
					{children}
				</Box>
			)}
		</Box>
	);
}



const ResultColumn = styled(Grid)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	// background: "tan",
	height: '100%',
	gap: '1.5rem',
});
