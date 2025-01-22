import { FC, useEffect, useState } from 'react';
import styles from './Configurator.module.scss';
import { Divider, Grid, Stack } from '@mui/material';
import {
	CalculationResults,
	ConfiguratorCard,
	ConfiguratorRoadTypeSelection,
	ConfiguratorSlider,
	IConfiguratorRoadTypeSelectionProps,
} from '@components/configurator';
import { ICalculationResult, IConfigurationValues, ConfigurationName } from '@models';
import { EvManagementIcon, FuelIcon, CarIcon } from '@components/icons';

const TREE_COMPENSATION = 38.5;
const calculate = (config: IConfigurationValues, roadType: IConfiguratorRoadTypeSelectionProps['value']): ICalculationResult => {
	const kmPercorsi = config[ConfigurationName.DAILY_AVERAGE_KM] * 365 * 4;
	const coeffBenz = roadType === 'city' ? 1 : 0.9;
	const coeffEle = roadType === 'city' ? 1 : 1.2;
	const costoKmBenz = (kmPercorsi * config[ConfigurationName.GAS_PRICE] * coeffBenz * config[ConfigurationName.CONSUMPTION]) / 100;
	const costoKmElectriv =
		(kmPercorsi * config[ConfigurationName.ELECTRICITY_PRICE] * coeffEle * config[ConfigurationName.ELECTRICITY_CONSUMPTION]) / 1000;
	const co2Total = (kmPercorsi * config[ConfigurationName.CO2]) / 1000000;

	const result = {
		kmPercorsi,
		euro: costoKmBenz - costoKmElectriv,
		co2Total,
		treeNeededTocompensate: TREE_COMPENSATION * co2Total,
	};

	return result;
};

export const Configurator: FC = () => {
	const [roadType, setRoadType] = useState<IConfiguratorRoadTypeSelectionProps['value']>('city');
	const [config, setConfig] = useState<IConfigurationValues>({
		[ConfigurationName.DAILY_AVERAGE_KM]: 20,
		[ConfigurationName.ELECTRICITY_CONSUMPTION]: 140,
		[ConfigurationName.ELECTRICITY_PRICE]: 0.2,
		[ConfigurationName.CONSUMPTION]: 10,
		[ConfigurationName.CO2]: 100,
		[ConfigurationName.GAS_PRICE]: 1.9,
	});
	const [calculation, setCalculation] = useState<ICalculationResult>({
		kmPercorsi: 20,
		euro: 0,
		co2Total: 0,
		treeNeededTocompensate: 0,
	});

	const onSliderValueChanged = (e: Event, v: number | number[]) => setConfig({ ...config, [(e.target as any).name]: v as number });

	useEffect(() => setCalculation(calculate(config, roadType)), [config, roadType]);

	return (
		<Grid
			container
			flexGrow={1}
			columnSpacing={4}
			sx={{
				backgroundColor: 'common.black',
				color: 'common.white',
				paddingX: 9,
				paddingTop: 2.5,
				paddingBottom: 5,
				overflowX: 'hidden',
			}}
		>
			<Grid item xs={8}>
				<Grid container spacing={4}>
					<Grid item xs={6}>
						<ConfiguratorCard title="I tuoi viaggi - giorni feriali" icon={<CarIcon />}>
							<Stack direction="column" divider={<Divider />}>
								<ConfiguratorSlider
									title="Media giornaliera"
									unit="km"
									name={ConfigurationName.DAILY_AVERAGE_KM}
									value={config[ConfigurationName.DAILY_AVERAGE_KM]}
									min={0}
									max={300}
									step={5}
									onChange={onSliderValueChanged}
								/>
								<ConfiguratorRoadTypeSelection
									title="Su quali tipi di strade guidi solitamente?"
									value={roadType}
									onChange={(_, v) => setRoadType(v as any)}
								/>
							</Stack>
						</ConfiguratorCard>
					</Grid>
					<Grid item xs={6}>
						<ConfiguratorCard title="Costo veicolo elettrico" icon={<EvManagementIcon />}>
							<Stack direction="column" divider={<Divider />}>
								<ConfiguratorSlider
									title="Efficienza EV."
									unit="Wh/Km"
									name={ConfigurationName.ELECTRICITY_CONSUMPTION}
									value={config[ConfigurationName.ELECTRICITY_CONSUMPTION]}
									min={100}
									max={300}
									step={5}
									onChange={onSliderValueChanged}
								/>
								<ConfiguratorSlider
									title="Elettricità"
									unit="€/KWh"
									name={ConfigurationName.ELECTRICITY_PRICE}
									value={config[ConfigurationName.ELECTRICITY_PRICE]}
									min={0}
									max={1}
									step={0.1}
									onChange={onSliderValueChanged}
								/>
							</Stack>
						</ConfiguratorCard>
					</Grid>
					<Grid item xs={12}>
						<ConfiguratorCard title="Il costo del tuo veicolo" icon={<FuelIcon />}>
							<Grid container direction="row" columnSpacing={8}>
								<Grid item xs={6}>
									<ConfiguratorSlider
										title="Efficienza"
										unit="L/100Km"
										name={ConfigurationName.CONSUMPTION}
										value={config[ConfigurationName.CONSUMPTION]}
										min={1}
										max={30}
										step={0.5}
										onChange={onSliderValueChanged}
									/>
								</Grid>
								<Grid item xs={6}>
									<ConfiguratorSlider
										title="CO2"
										unit="gC02/Km"
										name={ConfigurationName.CO2}
										value={config[ConfigurationName.CO2]}
										min={10}
										max={300}
										step={10}
										onChange={onSliderValueChanged}
									/>
								</Grid>
								<Grid item xs={6}>
									<ConfiguratorSlider
										title="Benzina"
										unit="€/L"
										name={ConfigurationName.GAS_PRICE}
										value={config[ConfigurationName.GAS_PRICE]}
										min={1}
										max={3}
										step={0.1}
										onChange={onSliderValueChanged}
									/>
								</Grid>
							</Grid>
						</ConfiguratorCard>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<Grid container direction="column" sx={{ height: 1.0 }}>
					<Grid item>
						<CalculationResults results={calculation} />
					</Grid>
					<Grid item sx={{ marginX: 'auto', width: 1.0 }} flexGrow={1}>
						<div className={styles.Illustrator} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
