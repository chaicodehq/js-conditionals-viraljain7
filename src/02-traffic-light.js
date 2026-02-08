/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {

  //  case-insensitive
  let colorStr = color.toLowerCase();
  let signal;

  switch (colorStr) {
    case "green":
      // "green"        → "GO"
      signal = "GO";
      break;

    case "yellow":
      // "yellow"       → "SLOW DOWN"
      signal = "SLOW DOWN";
      break;

    case "red":
      // "red"          → "STOP"
      signal = "STOP";
      break;

    case "flashing red":
      // "flashing red" → "STOP AND PROCEED WITH CAUTION"
      signal = "STOP AND PROCEED WITH CAUTION";
      break;

    default:
      // anything else  → "INVALID SIGNAL"
      signal = "INVALID SIGNAL";
  }

  return signal;
}
