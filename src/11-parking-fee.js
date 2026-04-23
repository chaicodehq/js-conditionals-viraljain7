/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - The fee should never exceed the daily maximum
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here
  // Conditionals: https://classroom.github.com/a/fwCZoRgs
  // Datatypes Foundation: https://classroom.github.com/a/LXgTzkVh
  // Datatypes Intermediate: https://classroom.github.com/a/ARempKK3
  // Loops: https://classroom.github.com/a/pZ1cSgDU
  // Functions: https://classroom.github.com/a/o2RfZZTy

  let vehicleTypeOptions = ["car", "motorcycle", "bus"];

  if (!vehicleTypeOptions.includes(vehicleType)) return -1;

  let fullHours = Math.ceil(hours);
  if (hours <= 0) return -1;

  let parkingFee = 0;
  if (vehicleType === "car") {
    do {
      if (fullHours === 1) parkingFee += 5;
      else {
        parkingFee += 3;
      }
      fullHours--;
    } while (fullHours > 0);

    parkingFee = parkingFee > 30 ? 30 : parkingFee;
  } else if (vehicleType === "motorcycle") {
    do {
      if (fullHours === 1) parkingFee += 3;
      else {
        parkingFee += 2;
      }
      fullHours--;
    } while (fullHours > 0);

    parkingFee = parkingFee > 18 ? 18 : parkingFee;
  } else {
    do {
      if (fullHours === 1) parkingFee += 10;
      else {
        parkingFee += 7;
      }
      fullHours--;
    } while (fullHours > 0);

    parkingFee = parkingFee > 60 ? 60 : parkingFee;
  }

  return parkingFee;
}

calculateParkingFee(10, "bus");

// export function calculateParkingFee(hours, vehicleType) {
//   if (hours <= 0) return -1;

//   hours = Math.ceil(hours);

//   if (vehicleType === "car") {
//     return Math.min(5 + (hours - 1) * 3, 30);
//   }

//   if (vehicleType === "motorcycle") {
//     return Math.min(3 + (hours - 1) * 2, 18);
//   }

//   if (vehicleType === "bus") {
//     return Math.min(10 + (hours - 1) * 7, 60);
//   }

//   return -1;
// }
