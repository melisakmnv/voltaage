
import { IConfigurationValues, ICalculationResult, ConfigurationName } from "../../models/proposte";

export const calculate = (CO2: number, CONSUMPTION: number, ELECTRICITY_CONSUMPTION: number, panelSolar: boolean, wallBox: boolean, config: IConfigurationValues, roadType: string | null, kmPerYear: number, TREE_COMPENSATION: number, fixamount: number): ICalculationResult => {
	const URBAN = 'urban';
	const MIX = 'mix';
	const HIGH_WAY = 'highway';

	const coeffFuelIce = roadType === URBAN ? 1.2 : roadType === MIX ? 1.1 : 1;
	const coeffEle = roadType === URBAN ? 0.9 : roadType === HIGH_WAY ? 1.1 : 1;

	const f1 = roadType === URBAN && panelSolar && wallBox ? 1 : roadType === MIX && panelSolar && wallBox ? 0.9 : roadType === HIGH_WAY && panelSolar && wallBox ? 0.8 : 0;
	const f2 = roadType === URBAN && !panelSolar && wallBox ? 1 : roadType === MIX && !panelSolar && wallBox ? 0.9 : roadType === HIGH_WAY && !panelSolar && wallBox ? 0.8 : 0;
	const f3 = roadType === URBAN && !panelSolar && !wallBox ? 1 : roadType === MIX && !panelSolar && !wallBox ? 0.9 : roadType === HIGH_WAY && !panelSolar && !wallBox ? 0.8 : 0;
	const f4 = roadType === MIX ? 0.1 : roadType === HIGH_WAY ? 0.2 : 0;

	const EQAkm = kmPerYear < 50000 ? 2438 : kmPerYear < 80000 ? 2574 : kmPerYear < 100000 ? 3833 : kmPerYear < 130000 ? 4338 : kmPerYear < 150000 ? 5134 : kmPerYear < 180000 ? 6105 : 9069
	const GLAkm = kmPerYear < 50000 ? 2996 : kmPerYear < 80000 ? 3578 : kmPerYear < 100000 ? 3863 : kmPerYear < 130000 ? 4978 : kmPerYear < 150000 ? 5951 : kmPerYear < 180000 ? 6962 : 7974

	const costoKmBenz = (kmPerYear * config[ConfigurationName.FUEL_PRICE] * coeffFuelIce * CONSUMPTION) / 100;

	const costoKmElectriv =
		f1 * (kmPerYear * config[ConfigurationName.ELECTRICITY_PRICE_HOME_SOLAR] * coeffEle * ELECTRICITY_CONSUMPTION) / 100 +
		f2 * (kmPerYear * config[ConfigurationName.ELECTRICITY_PRICE_HOME_NOSOLAR] * coeffEle * ELECTRICITY_CONSUMPTION) / 100 +
		f3 * (kmPerYear * config[ConfigurationName.ELECTRICITY_PRICE_PUBLIC_SLOW] * coeffEle * ELECTRICITY_CONSUMPTION) / 100 +
		f4 * (kmPerYear * config[ConfigurationName.ELECTRICITY_PRICE_PUBLIC_FAST] * coeffEle * ELECTRICITY_CONSUMPTION) / 100;

	const electicityCost =
		f1 * config[ConfigurationName.ELECTRICITY_PRICE_HOME_SOLAR] +
		f2 * config[ConfigurationName.ELECTRICITY_PRICE_HOME_NOSOLAR] +
		f3 * config[ConfigurationName.ELECTRICITY_PRICE_PUBLIC_SLOW] +
		f4 * config[ConfigurationName.ELECTRICITY_PRICE_PUBLIC_FAST];


	const M_R = GLAkm - EQAkm
	const co2Total = (kmPerYear * CO2) / 1000000;

	const result = {
		electicityCost,
		savings: costoKmBenz - costoKmElectriv + fixamount + M_R,
		treeConpensation: TREE_COMPENSATION * co2Total,
		co2Total: co2Total
	}

	return result
}