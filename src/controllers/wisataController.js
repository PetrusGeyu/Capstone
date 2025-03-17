const Wisata = require("../models/wisataModel");

exports.getAllWisata = (req, res) => {
  Wisata.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getWisataById = (req, res) => {
  const { id } = req.params;
  Wisata.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Wisata tidak ditemukan" });
    res.json(result[0]);
  });
};

exports.createWisata = (req, res) => {
  Wisata.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Wisata berhasil ditambahkan", id: result.insertId });
  });
};

exports.updateWisata = (req, res) => {
  const { id } = req.params;
  Wisata.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Wisata berhasil diperbarui" });
  });
};

exports.deleteWisata = (req, res) => {
  const { id } = req.params;
  Wisata.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Wisata berhasil dihapus" });
  });
};
