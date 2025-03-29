const User = require("../models/userModel");

exports.getUserProfile = (req, res) => {
  const userId = req.user.id; // dari token yg di-parse di middleware

  User.getById(userId, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "User tidak ditemukan" });

    res.json(result[0]); // kirim data user
  });
};
