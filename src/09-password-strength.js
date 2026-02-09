/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  let patternLowercase = /[a-z]/; 
  let patternUppercase = /[A-Z]/; 
  let patternNumber = /[0-9]/; 
  let patternSpecialCharRegex = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/;

  let res = ["weak", "weak", "medium", "medium", "strong", "very strong"];
  let criteriaLevel = 0;

  if (password === "" || typeof password !== "string") {
    return res[criteriaLevel];
  }

  if (password.length >= 8) {
    criteriaLevel++;
    console.log(criteriaLevel);
  }
  if (patternLowercase.test(password)) {
    criteriaLevel++;
    console.log(criteriaLevel);
  }
  if (patternUppercase.test(password)) {
    criteriaLevel++;
    console.log(criteriaLevel);
  }
  if (patternNumber.test(password)) {
    criteriaLevel++;
    console.log(criteriaLevel);
  }

  if (patternSpecialCharRegex.test(password)) {
    criteriaLevel++;
  }
   // regex understanding
  return res[criteriaLevel];
}
