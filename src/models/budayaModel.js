const db = require("../config/db");

const Budaya = {
  getAll: (callback) => {
    db.query("SELECT * FROM budaya", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM budaya WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO budaya (nama, asal, deskripsi, gambar) VALUES (?, ?, ?, ?)", 
      [data.nama, data.asal, data.deskripsi, data.gambar], callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE budaya SET nama = ?, asal = ?, deskripsi = ?, gambar = ? WHERE id = ?", 
      [data.nama, data.asal, data.deskripsi, data.gambar, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM budaya WHERE id = ?", [id], callback);
  },
};

module.exports = Budaya;
