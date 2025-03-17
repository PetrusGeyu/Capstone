const Budaya = require("../models/budayaModel");

exports.getAllBudaya = (req, res) => {
  Budaya.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getBudayaById = (req, res) => {
  const { id } = req.params;
  Budaya.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Budaya tidak ditemukan" });
    res.json(result[0]);
  });
};

exports.createBudaya = (req, res) => {
  Budaya.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Budaya berhasil ditambahkan", id: result.insertId });
  });
};

exports.updateBudaya = (req, res) => {
  const { id } = req.params;
  Budaya.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Budaya berhasil diperbarui" });
  });
};

exports.deleteBudaya = (req, res) => {
  const { id } = req.params;
  Budaya.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Budaya berhasil dihapus" });
  });
};
