const Review = require("../models/reviewModel");

exports.getAllReviews = (req, res) => {
  Review.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createReview = (req, res) => {
  Review.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Review berhasil ditambahkan", id: result.insertId });
  });
};
