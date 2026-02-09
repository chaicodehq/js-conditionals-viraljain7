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
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
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

  let parkingFees = 0;

  let vehicleRange = ["car", "motorcycle", "bus"];
  if (!vehicleRange.includes(vehicleType)) return -1;
  hours = Math.ceil(hours);

  if (hours < 1) return -1;

  if (vehicleType === "car") {
    while (hours > 0) {
      if (hours > 1) {
        parkingFees += 3;
      } else {
        parkingFees += 5;
      }

      if (parkingFees > 30) parkingFees = 30;
      hours--;
    }
  } else if (vehicleType === "motorcycle") {
    while (hours > 0) {
      if (hours > 1) {
        parkingFees += 2;
      } else {
        parkingFees += 3;
      }

      if (parkingFees > 18) parkingFees = 18;
      hours--;
    }
  } else {
    while (hours > 0) {
      if (hours > 1) {
        parkingFees += 7;
      } else {
        parkingFees += 10;
      }

      if (parkingFees > 60) parkingFees = 60;
      hours--;
    }
  }

  console.log(parkingFees);
  return parkingFees;
}

calculateParkingFee(10, "bus");
