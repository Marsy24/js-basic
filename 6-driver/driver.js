const checkDriver = (hasLicence, age, isDrunk) =>
    hasLicence && age >= 18 && !isDrunk;

console.log(checkDriver(true, 18, false))