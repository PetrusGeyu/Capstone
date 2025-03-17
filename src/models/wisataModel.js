const db = require("../config/db");

const Wisata = {
  getAll: (callback) => {
    db.query("SELECT * FROM wisata", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM wisata WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO wisata SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE wisata SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM wisata WHERE id = ?", [id], callback);
  },
};

module.exports = Wisata;
