const calculateDistance = (currentLat, currentLong, destinationLat, destinationLong) => {
    const distanceLat = Math.abs(destinationLat - currentLat) * 111;
    const distanceLong = Math.abs(destinationLong - currentLong) * 111;

    return Math.sqrt(Math.pow(distanceLat, 2) + Math.pow(distanceLong, 2));
};

const currentLat = 55.7558;
const currentLong = 37.6176;
const destinationLat = 59.9343;
const destinationLong = 30.3351;

console.log(calculateDistance(currentLat, currentLong, destinationLat, destinationLong));