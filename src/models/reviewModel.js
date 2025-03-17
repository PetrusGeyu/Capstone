const db = require("../config/db");

const Review = {
  getAll: (callback) => {
    db.query("SELECT * FROM review", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM review WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO review SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE review SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM review WHERE id = ?", [id], callback);
  },
};

module.exports = Review;
