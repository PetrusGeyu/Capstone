const db = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
  create: async (data, callback) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    db.query("INSERT INTO users SET ?", data, callback);
  },

  findByEmail: (email, callback) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
  },

  getById: (id, callback) => {
    db.query("SELECT id, name, email FROM users WHERE id = ?", [id], callback);
  }
};

module.exports = User;
