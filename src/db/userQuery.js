export function getUserById(db, userId) {
  return db.query("SELECT * FROM users WHERE id = '" + userId + "'");
}
