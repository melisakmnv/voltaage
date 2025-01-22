


import ds3 from '../../../assets/cars/carrousel/electric-ds3.png';
import mercedes from "../../../assets/cars/Mercedes-EQA.png"


export const carInput = [
    {
        id: 10,
        vehicleBrand: 'Audi',
        vehicleModel: 'A3',
        vehicleVersion: "2002",
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
        vehicleVersion: "200 d auto 4matic 2019",
        vehicleImg: mercedes,
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


