import ds3 from '../../assets/cars/carrousel/electric-ds3.png';

import corsa from '../../assets/cars/carrousel/opel-corsa-e.png';
import mokka from '../../assets/cars/carrousel/opel-mokka.png';

// CAROUSEL
// import mercedesEQA from '../../assets/cars/Mercedes-EQA.png'
import mercedesEQA from '../../assets/cars/Mercedes-EQA.svg'
import mercerdes_1 from '../../assets/cars/carousel_new/mercedes_1.png'
import mercerdes_2 from '../../assets/cars/carousel_new/mercedes_2.png'
import mercerdes_3 from '../../assets/cars/carousel_new/mercedes_3.png'
import mercerdes_4 from '../../assets/cars/carousel_new/mercedes_4.png'
import mercerdes_5 from '../../assets/cars/carousel_new/mercedes_5.png'
import mercerdes_6 from '../../assets/cars/carousel_new/mercedes_6.png'



// SERVICES //
import volteum from '../../assets/illustrations/volteum_service.svg'
import refilla from '../../assets/illustrations/reefilla_service.webp'
import enelx from '../../assets/illustrations/enelx_service.png'


export const carData = [
	{
		id: 1,
		vehicleBrand: 'Mercedes',
		vehicleModel: 'EQA',
		vehicleImg: mercedesEQA,
		albums: [mercedesEQA, mercerdes_1, mercerdes_2, mercerdes_3, mercerdes_4, mercerdes_5, mercerdes_6],
		consumption: 5.6,
		fuelType: 'Electric/Gasoline',
		purchaseCost: {
			listPrice: 36000,
			avgRunningCost: 1200,
		},
		subscriptionType: 'Dual Fuel',
		subscription: {
			cost: {
				price: 499,
			},
			services: [
				{
					id: 1,
					image: volteum,
					serviceTitle: 'App per la ricarica della tua auto',
					description:
						'We calculate the energy need of any given trip specifically for the route and the car with our powerful simulations. We plan an optimal route considering the discharge of the battery and also inserting the necessary chargers. With our tailored solution for buses and cars, we help electrifying and operating fleets of any size.',
					prevalidated: true,
				},
				{
					id: 2,
					image: refilla,
					serviceTitle: 'Ricarica on demand Reefilla',
					description:
						'Reefilla è il primo servizio di charging delivery mobile e predittivo, pensato per i possessori di auto elettriche e gli operatori nel settore della mobilità. Potrai ricaricare la tua macchina elettrica dove e quando vuoi, senza dover interrompere la tua routine quotidiana.',
					prevalidated: false,
				},
				{
					id: 3,
					image: enelx,
					serviceTitle: '20% di sconto sui pannelli solari',
					description:
						'Enel X Way is helping utilities leverage the $100B EVSE opportunity by designing smart charging strategies that are a fit for a service territory’s individual needs for both residential and commercial customers. Our energy and client services team of domain experts provides counsel to deploy a seamless end-to-end customer solution that’s right for you.',
					prevalidated: false,
				},
				{
					id: 4,
					image: volteum,
					serviceTitle: 'Lorem ipsum dolor sit amet.',
					description:
						'We calculate the energy need of any given trip specifically for the route and the car with our powerful simulations. We plan an optimal route considering the discharge of the battery and also inserting the necessary chargers. With our tailored solution for buses and cars, we help electrifying and operating fleets of any size.',
					prevalidated: false,
				},
				{
					id: 5,
					image: refilla,
					serviceTitle: 'Lorem ipsum dolor sit amet.',
					description:
						'Reefilla è il primo servizio di charging delivery mobile e predittivo, pensato per i possessori di auto elettriche e gli operatori nel settore della mobilità. Potrai ricaricare la tua macchina elettrica dove e quando vuoi, senza dover interrompere la tua routine quotidiana.',
					prevalidated: false,
				},
				{
					id: 6,
					image: refilla,
					serviceTitle: 'Lorem ipsum dolor sit amet.',
					description:
						'Reefilla è il primo servizio di charging delivery mobile e predittivo, pensato per i possessori di auto elettriche e gli operatori nel settore della mobilità. Potrai ricaricare la tua macchina elettrica dove e quando vuoi, senza dover interrompere la tua routine quotidiana.',
					prevalidated: false,
				},
			],
		},
		co2Consumption: 10,
		compatible: {
			brand: 'Mercedes',
			model: 'GLA',
			version: '200 d auto 4matic',
		},
		priority: false,
		carDetails: {
			seat: 5,
			door: 5,
			rechargeLast: 416,
			consumption: 183,
			speed: 160,
			gear: 'automatic',
			consumptType: 'elettrico',
		},
	},
	// {
	// 	id: 2,
	// 	vehicleBrand: 'Peugeot',
	// 	vehicleModel: 'e-208',
	// 	vehicleImg: peugeot208,
	// 	albums: [peugeot208_1, peugeot208_2, peugeot208_3],
	// 	albumDetails: [""],
	// 	consumption: 15.8,
	// 	fuelType: 'Electric',
	// 	purchaseCost: {
	// 		listPrice: 35250,
	// 		avgRunningCost: 1200
	// 	},
	// 	subscriptionType: 'Electric Style',
	// 	subscription: {
	// 		cost: {
	// 			price: 299
	// 		},
	// 		services: [
	// 			{
	// 				id: 1,
	// 				serviceTitle: 'App for charging your car',
	// 				description: "",
	// 				prevalidated: true,
	// 			},
	// 			{
	// 				id: 2,
	// 				serviceTitle: '20% discount on solar panels',
	// 				description: "",
	// 				prevalidated: true,
	// 			},
	// 			{
	// 				id: 3,
	// 				serviceTitle: 'Ricarica on demand Reefilla',
	// 				description: "",
	// 				prevalidated: true,
	// 			},
	// 			{
	// 				id: 4,
	// 				serviceTitle: 'Service 4',
	// 				description: "",
	// 				prevalidated: true,
	// 			},
	// 			{
	// 				id: 5,
	// 				serviceTitle: 'Service 5',
	// 				description: "",
	// 				prevalidated: true,
	// 			},
	// 		]
	// 	},
	// 	co2Consumption: 5,
	// 	compatible: {
	// 		brand: 'Mercedes',
	// 		model: 'GLA',
	// 		version: '200 d auto 4matic'
	// 	},
	// 	priority: true,
	// 	carDetails:
	// 	{
	// 		seat: 4,
	// 		door: 4,
	// 		rechargeLast: 110,
	// 		consumption: 153,
	// 		speed: 150,
	// 		gear: "automatic",
	// 		consumptType: "elettrico"
	// 	}
	// },
	// {
	// 	id: 3,
	// 	vehicleBrand: 'Opel',
	// 	vehicleModel: 'Corsa e',
	// 	vehicleImg: corsa,
	// 	albums: [Opel_Corsa_e_1, Opel_Corsa_e_2, Opel_Corsa_e_3],
	// 	consumption: 16.2,
	// 	fuelType: 'Electric',
	// 	purchaseCost: {
	// 		listPrice: 35100,
	// 		avgRunningCost: 1200
	// 	},
	// 	subscriptionType: 'Electric Style',
	// 	subscription: {
	// 		cost: {
	// 			price: 399
	// 		},
	// 		services: [
	// 			{
	// 				id: 1,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Mobility Card',
	// 				description: 'per la ricaria in mobilita'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			}
	// 		]
	// 	},
	// 	co2Consumption: 0,
	// 	plateNumber: 'CC123DD',
	// 	priority: false
	// },
	// {
	// 	id: 4,
	// 	vehicleBrand: 'Peugeot',
	// 	vehicleModel: 'e-2008',
	// 	vehicleImg: e2008,
	// 	albums: [Peugeot_e_2008_1, Peugeot_e_2008_2, Peugeot_e_2008_3],
	// 	consumption: 17.6,
	// 	fuelType: 'Electric',
	// 	purchaseCost: {
	// 		listPrice: 39900,
	// 		avgRunningCost: 1500
	// 	},
	// 	subscriptionType: 'New Energy',
	// 	subscription: {
	// 		cost: {
	// 			price: 499
	// 		},
	// 		services: [
	// 			{
	// 				id: 1,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Mobility Card',
	// 				description: 'per la ricaria in mobilita'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			}
	// 		]
	// 	},
	// 	co2Consumption: 0,
	// 	plateNumber: 'BB123CC',
	// 	priority: true
	// },
	// {
	// 	id: 5,
	// 	vehicleBrand: 'Opel',
	// 	vehicleModel: 'Mokka-e',
	// 	vehicleImg: mokka,
	// 	albums: [Opel_Mokka_e_1, Opel_Mokka_e_2, Opel_Mokka_e_3],
	// 	consumption: 17.4,
	// 	fuelType: 'Electric',
	// 	purchaseCost: {
	// 		listPrice: 39050,
	// 		avgRunningCost: 1500
	// 	},
	// 	subscriptionType: 'New Energy',
	// 	subscription: {
	// 		cost: {
	// 			price: 499
	// 		},
	// 		services: [
	// 			{
	// 				id: 1,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Mobility Card',
	// 				description: 'per la ricaria in mobilita'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			}
	// 		]
	// 	},
	// 	co2Consumption: 0,
	// 	plateNumber: 'AA123BB',
	// 	priority: false
	// },
	// {
	// 	id: 6,
	// 	vehicleBrand: 'DS3',
	// 	vehicleModel: 'Electric Crossback',
	// 	vehicleImg: ds3,
	// 	albums: [DS3_Electric_Crossback_1, DS3_Electric_Crossback_2, DS3_Electric_Crossback_3],
	// 	consumption: 17.3,
	// 	fuelType: 'Electric',
	// 	purchaseCost: {
	// 		listPrice: 40750,
	// 		avgRunningCost: 1500
	// 	},
	// 	subscriptionType: 'New Energy',
	// 	subscription: {
	// 		cost: {
	// 			price: 499
	// 		},
	// 		services: [
	// 			{
	// 				id: 1,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Mobility Card',
	// 				description: 'per la ricaria in mobilita'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			}
	// 		]
	// 	},
	// 	co2Consumption: 0,
	// 	plateNumber: 'CC123DD',
	// 	priority: false
	// },
	// {
	// 	id: 7,
	// 	vehicleBrand: 'Jeep',
	// 	vehicleModel: 'Renegade 4xe',
	// 	vehicleImg: renegade,
	// 	albums: [Jeep_Renegade_XE_1, Jeep_Renegade_XE_2, Jeep_Renegade_XE_3],
	// 	consumption: 30,
	// 	fuelType: 'Electric/Gasoline',
	// 	purchaseCost: {
	// 		listPrice: 43500,
	// 		avgRunningCost: 1700
	// 	},
	// 	subscriptionType: 'Dual Fuel',
	// 	subscription: {
	// 		cost: {
	// 			price: 359
	// 		},
	// 		services: [
	// 			{
	// 				id: 1,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Mobility Card',
	// 				description: 'per la ricaria in mobilita'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			}
	// 		]
	// 	},
	// 	co2Consumption: 45,
	// 	plateNumber: ['AA123BB', 'BB123CC'],
	// 	priority: false
	// },
	// {
	// 	id: 8,
	// 	vehicleBrand: 'Jeep',
	// 	vehicleModel: 'Compass 4xe',
	// 	vehicleImg: compass,
	// 	albums: [Jeep_Compass_xe_1, Jeep_Compass_xe_2, Jeep_Compass_xe_3],
	// 	consumption: 30,
	// 	fuelType: 'Electric/Gasoline',
	// 	purchaseCost: {
	// 		listPrice: 45850,
	// 		avgRunningCost: 1700
	// 	},
	// 	subscriptionType: 'Dual Fuel',
	// 	subscription: {
	// 		cost: {
	// 			price: 359
	// 		},
	// 		services: [
	// 			{
	// 				id: 1,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Mobility Card',
	// 				description: 'per la ricaria in mobilita'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Manutenzione',
	// 				description: 'ordinaria e straordinaria'
	// 			}
	// 		]
	// 	},
	// 	co2Consumption: 46,
	// 	plateNumber: ['CC123DD'],
	// 	priority: true
	// }
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
			avgRunningCost: 0,
		},
		subscriptionType: 'n/a',
		subscription: {
			cost: {
				price: 0,
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria',
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita',
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria',
				},
			],
		},
		plateNumber: 'AA123BB',
		co2Consumption: 133,
		priority: 'Electric Style',
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
			avgRunningCost: 0,
		},
		subscriptionType: 'n/a',
		subscription: {
			cost: {
				price: 0,
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria',
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita',
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria',
				},
			],
		},
		plateNumber: 'BB123CC',
		co2Consumption: 180,
		priority: 'New Energy',
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
			avgRunningCost: 0,
		},
		subscriptionType: 'n/a',
		subscription: {
			cost: {
				price: 0,
			},
			services: [
				{
					id: 1,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria',
				},
				{
					id: 2,
					name: 'Mobility Card',
					description: 'per la ricaria in mobilita',
				},
				{
					id: 3,
					name: 'Manutenzione',
					description: 'ordinaria e straordinaria',
				},
			],
		},
		plateNumber: 'CC123DD',
		co2Consumption: 140,
		priority: 'Dual Fuel',
	},
];

export const stations = [
	{
		city: 'parigi',
		country: 'france',
		station: 56,
	},
	{
		city: 'new-york',
		country: 'USA',
		station: 50,
	},
	{
		city: 'milano',
		country: 'italia',
		station: 20,
	},
	{
		city: 'torino',
		country: 'italia',
		station: 17,
	},
	{
		city: 'palermo',
		country: 'italia',
		station: 36,
	},
];
