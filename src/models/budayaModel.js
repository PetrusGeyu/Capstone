const db = require("../config/db");

const Budaya = {
  getAll: (callback) => {
    db.query("SELECT * FROM budaya", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM budaya WHERE id = ?", [id], callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO budaya SET ?", data, callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE budaya SET ? WHERE id = ?", [data, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM budaya WHERE id = ?", [id], callback);
  },
};

module.exports = Budaya;
