import fiat500 from '../../assets/cars/carrousel/fiat500e.png';
import peugeot208 from '../../assets/cars/carrousel/peugeot-e208.png';
import ds3 from '../../assets/cars/carrousel/electric-ds3.png';
import compass from '../../assets/cars/carrousel/jeep-compass-xe.png';
import renegade from '../../assets/cars/carrousel/jeep-renegade-xe.png';
import corsa from '../../assets/cars/carrousel/opel-corsa-e.png';
import mokka from '../../assets/cars/carrousel/opel-mokka.png';
import e2008 from '../../assets/cars/carrousel/peugeot-e2008.png';

import fiat1 from '../../assets/cars/carrousel/1_Fiat 500e.png';
import fiat2 from '../../assets/cars/carrousel/2_Fiat 500e.png';
import fiat3 from '../../assets/cars/carrousel/3_Fiat 500e.png';

import peugeot208_1 from '../../assets/cars/carrousel/1_Peugeot e-208.png';
import peugeot208_2 from '../../assets/cars/carrousel/2_Peugeot e-208.png';
import peugeot208_3 from '../../assets/cars/carrousel/3_Peugeot e-208.png';

import Opel_Corsa_e_1 from '../../assets/cars/carrousel/1_Opel_Corsa_e.png';
import Opel_Corsa_e_2 from '../../assets/cars/carrousel/2_Opel_Corsa_e.png';
import Opel_Corsa_e_3 from '../../assets/cars/carrousel/3_Opel_Corsa_e.png';

import Peugeot_e_2008_1 from '../../assets/cars/carrousel/1_Peugeot e-2008.png';
import Peugeot_e_2008_2 from '../../assets/cars/carrousel/2_Peugeot e-2008.png';
import Peugeot_e_2008_3 from '../../assets/cars/carrousel/3_Peugeot e-2008.png';

import Opel_Mokka_e_1 from '../../assets/cars/carrousel/1_Opel_Mokka-e.png';
import Opel_Mokka_e_2 from '../../assets/cars/carrousel/2_Opel_Mokka-e.png';
import Opel_Mokka_e_3 from '../../assets/cars/carrousel/3_Opel_Mokka-e.png';

import DS3_Electric_Crossback_1 from '../../assets/cars/carrousel/1_DS3 Electric Crossback.png';
import DS3_Electric_Crossback_2 from '../../assets/cars/carrousel/2_DS3 Electric Crossback.png';
import DS3_Electric_Crossback_3 from '../../assets/cars/carrousel/3_DS3 Electric Crossback.png';

import Jeep_Renegade_XE_1 from '../../assets/cars/carrousel/1_Jeep_Renegade_XE.png';
import Jeep_Renegade_XE_2 from '../../assets/cars/carrousel/2_Jeep_Renegade_XE.png';
import Jeep_Renegade_XE_3 from '../../assets/cars/carrousel/3_Jeep_Renegade_XE.png';

import Jeep_Compass_xe_1 from '../../assets/cars/carrousel/1_Jeep Compass xe.png';
import Jeep_Compass_xe_2 from '../../assets/cars/carrousel/2_Jeep Compass xe.png';
import Jeep_Compass_xe_3 from '../../assets/cars/carrousel/3_Jeep Compass xe.png';

export const carData = [
	{
		id: 1,
		vehicleBrand: 'Fiat',
		vehicleModel: '500e',
		vehicleImg: fiat500,
		albums: [fiat1, fiat2, fiat3],
		consumption: 14.4,
		fuelType: 'Electric',
		purchaseCost: {
			listPrice: 36000,
			avgRunningCost: 1200
		},
		subscriptionType: 'Electric Style',
		subscription: {
			cost: {
				price: 399
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 0,
		plateNumber: 'BB123CC',
		priority: false
	},
	{
		id: 2,
		vehicleBrand: 'Peugeot',
		vehicleModel: 'e-208',
		vehicleImg: peugeot208,
		albums: [peugeot208_1, peugeot208_2, peugeot208_3],
		consumption: 15.8,
		fuelType: 'Electric',
		purchaseCost: {
			listPrice: 35250,
			avgRunningCost: 1200
		},
		subscriptionType: 'Electric Style',
		subscription: {
			cost: {
				price: 399
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 0,
		plateNumber: 'AA123BB',
		priority: true
	},
	{
		id: 3,
		vehicleBrand: 'Opel',
		vehicleModel: 'Corsa e',
		vehicleImg: corsa,
		albums: [Opel_Corsa_e_1, Opel_Corsa_e_2, Opel_Corsa_e_3],
		consumption: 16.2,
		fuelType: 'Electric',
		purchaseCost: {
			listPrice: 35100,
			avgRunningCost: 1200
		},
		subscriptionType: 'Electric Style',
		subscription: {
			cost: {
				price: 399
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 0,
		plateNumber: 'CC123DD',
		priority: false
	},
	{
		id: 4,
		vehicleBrand: 'Peugeot',
		vehicleModel: 'e-2008',
		vehicleImg: e2008,
		albums: [Peugeot_e_2008_1, Peugeot_e_2008_2, Peugeot_e_2008_3],
		consumption: 17.6,
		fuelType: 'Electric',
		purchaseCost: {
			listPrice: 39900,
			avgRunningCost: 1500
		},
		subscriptionType: 'New Energy',
		subscription: {
			cost: {
				price: 499
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 0,
		plateNumber: 'BB123CC',
		priority: true
	},
	{
		id: 5,
		vehicleBrand: 'Opel',
		vehicleModel: 'Mokka-e',
		vehicleImg: mokka,
		albums: [Opel_Mokka_e_1, Opel_Mokka_e_2, Opel_Mokka_e_3],
		consumption: 17.4,
		fuelType: 'Electric',
		purchaseCost: {
			listPrice: 39050,
			avgRunningCost: 1500
		},
		subscriptionType: 'New Energy',
		subscription: {
			cost: {
				price: 499
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 0,
		plateNumber: 'AA123BB',
		priority: false
	},
	{
		id: 6,
		vehicleBrand: 'DS3',
		vehicleModel: 'Electric Crossback',
		vehicleImg: ds3,
		albums: [DS3_Electric_Crossback_1, DS3_Electric_Crossback_2, DS3_Electric_Crossback_3],
		consumption: 17.3,
		fuelType: 'Electric',
		purchaseCost: {
			listPrice: 40750,
			avgRunningCost: 1500
		},
		subscriptionType: 'New Energy',
		subscription: {
			cost: {
				price: 499
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 0,
		plateNumber: 'CC123DD',
		priority: false
	},
	{
		id: 7,
		vehicleBrand: 'Jeep',
		vehicleModel: 'Renegade 4xe',
		vehicleImg: renegade,
		albums: [Jeep_Renegade_XE_1, Jeep_Renegade_XE_2, Jeep_Renegade_XE_3],
		consumption: 30,
		fuelType: 'Electric/Gasoline',
		purchaseCost: {
			listPrice: 43500,
			avgRunningCost: 1700
		},
		subscriptionType: 'Dual Fuel',
		subscription: {
			cost: {
				price: 359
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 45,
		plateNumber: ['AA123BB', 'BB123CC'],
		priority: false
	},
	{
		id: 8,
		vehicleBrand: 'Jeep',
		vehicleModel: 'Compass 4xe',
		vehicleImg: compass,
		albums: [Jeep_Compass_xe_1, Jeep_Compass_xe_2, Jeep_Compass_xe_3],
		consumption: 30,
		fuelType: 'Electric/Gasoline',
		purchaseCost: {
			listPrice: 45850,
			avgRunningCost: 1700
		},
		subscriptionType: 'Dual Fuel',
		subscription: {
			cost: {
				price: 359
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		co2Consumption: 46,
		plateNumber: ['CC123DD'],
		priority: true
	}
];

export const carInput = [
	{
		id: 9,
		vehicleBrand: 'Audi',
		vehicleModel: 'A3',
		vehicleImg: mokka,
		consumption: 5.3,
		fuelType: 'Gasoline',
		purchaseCost: {
			listPrice: 30450,
			avgRunningCost: 0
		},
		subscriptionType: 'n/a',
		subscription: {
			cost: {
				price: 0
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		plateNumber: 'AA123BB',
		co2Consumption: 133,
		priority: 'Electric Style'
	},
	{
		id: 10,
		vehicleBrand: 'Fiat',
		vehicleModel: '500 L',
		vehicleImg: ds3,
		consumption: 7.3,
		fuelType: 'Gasoline',
		purchaseCost: {
			listPrice: 22250,
			avgRunningCost: 0
		},
		subscriptionType: 'n/a',
		subscription: {
			cost: {
				price: 0
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		plateNumber: 'BB123CC',
		co2Consumption: 180,
		priority: 'New Energy'
	},
	{
		id: 11,
		vehicleBrand: 'Mercedes',
		vehicleModel: 'GLA',
		vehicleImg: corsa,
		consumption: 5.6,
		fuelType: 'Diesel',
		purchaseCost: {
			listPrice: 43522,
			avgRunningCost: 0
		},
		subscriptionType: 'n/a',
		subscription: {
			cost: {
				price: 0
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita'
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria'
				}
			]
		},
		plateNumber: 'CC123DD',
		co2Consumption: 140,
		priority: 'Dual Fuel'
	}
];


export const stations = [
	{
		id: 1,
		city: 'parigi',
		country: 'france',
		station: 56,
		distance: 20
	},
	{
		id: 2,
		city: 'new-york',
		country: 'USA',
		station: 50,
		distance: 46
	},
	{
		id: 3,
		city: 'milano',
		country: 'italia',
		station: 20,
		distance: 9
	},
	{
		id: 4,
		city: 'torino',
		country: 'italia',
		station: 17,
		distance: 50
	},
	{
		id: 5,
		city: 'palermo',
		country: 'italia',
		station: 36,
		distance: 18
	}
];
