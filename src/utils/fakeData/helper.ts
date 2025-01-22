
export const formatPrice = (price: number) => new Intl.NumberFormat('de-DE').format(price);
export const formatElectricityPrice = (price: number) => price.toFixed(2).replace('.', ',')
export const formatKm = (km: number) => km.toLocaleString()

