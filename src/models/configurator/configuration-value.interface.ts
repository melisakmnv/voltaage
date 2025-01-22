export enum ConfigurationName {
	DAILY_AVERAGE_KM = 'DAILY_AVERAGE_KM',
	ELECTRICITY_CONSUMPTION = 'ELECTRICITY_CONSUMPTION',
	ELECTRICITY_PRICE = 'ELECTRICITY_PRICE',
	CONSUMPTION = 'CONSUMPTION',
	CO2 = 'CO2',
	GAS_PRICE = 'GAS_PRICE',
}

export interface IConfigurationValues {
	[ConfigurationName.DAILY_AVERAGE_KM]: number;
	[ConfigurationName.ELECTRICITY_CONSUMPTION]: number;
	[ConfigurationName.ELECTRICITY_PRICE]: number;
	[ConfigurationName.CONSUMPTION]: number;
	[ConfigurationName.CO2]: number;
	[ConfigurationName.GAS_PRICE]: number;
}
