/**
 * Application entry point.
 *
 * Run with: npm start
 * This script wires together auth and utility modules for the workshop demo.
 */

const { register, login } = require("./auth");

/**
 * Demo flow showing registration followed by login.
 * Replace or extend this for hands-on Git exercises.
 */
function runDemo() {
  const username = "workshop-user";
  const password = "securepass123";

  const registerResult = register(username, password);
  console.log("Register:", registerResult.message);

  const loginResult = login(username, password);
  console.log("Login:", loginResult.message);

  const badLogin = login(username, "wrong-password");
  console.log("Bad login:", badLogin.message);
}

//just adding a comment to commit


// Only run the demo when executed directly (not when imported by tests)
if (require.main === module) {
  runDemo();
}

module.exports = { runDemo };
