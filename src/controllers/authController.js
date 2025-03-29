const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validasi field kosong
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Cek apakah user sudah terdaftar
    const existingUser = await User.findByEmail(email);
    if (Array.isArray(existingUser) && existingUser.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const result = await new Promise((resolve, reject) => {
      User.create({ name, email, password: hashedPassword }, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    // Generate token JWT
    const token = jwt.sign(
      { id: result.insertId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered!",
      token,
      email,
      name
    });
    
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
};
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, async (err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    if (users.length === 0) return res.status(404).json({ message: "User not found" });

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Buat token tanpa role
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });
  });
};


//complete