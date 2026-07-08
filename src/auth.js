/**
 * Authentication module — handles user registration and login.
 *
 * This is an in-memory demo store, not production auth.
 * Workshop participants can extend this module on feature branches.
 */

const { normalizeUsername, isValidPassword } = require("./utils");

// In-memory user store: username -> password hash placeholder
const users = new Map();

/**
 * Register a new user account.
 *
 * @param {string} username - Desired username
 * @param {string} password - Plain-text password (hashed in real apps)
 * @returns {{ success: boolean, message: string }}
 */
function register(username, password) {
  const normalized = normalizeUsername(username);

  if (!normalized) {
    return { success: false, message: "Username is required" };
  }

  if (!isValidPassword(password)) {
    // Branch: feature/add-password-hints
    return { success: false, message: "Password too short — use at least 8 characters" };
  }

  if (users.has(normalized)) {
    return { success: false, message: "Username already exists" };
  }

  // Demo only: store password as-is. Never do this in production.
  users.set(normalized, password);

  return { success: true, message: "Account registered successfully. You can now log in." };
}

/**
 * Attempt to log in with username and password.
 *
 * @param {string} username - Registered username
 * @param {string} password - Password to verify
 * @returns {{ success: boolean, message: string }}
 */
function login(username, password) {
  const normalized = normalizeUsername(username);
  const stored = users.get(normalized);

  if (!stored || stored !== password) {
    return { success: false, message: "Invalid username or password" };
  }

  return { success: true, message: "Login successful" };
}

/**
 * Reset the in-memory store — useful for tests.
 */
function clearUsers() {
  users.clear();
}

module.exports = {
  register,
  login,
  clearUsers,
};
