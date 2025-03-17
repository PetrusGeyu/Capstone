require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const wisataRoutes = require("./routes/wisataRoutes");
const budayaRoutes = require("./routes/budayaRoutes");
const reviewRoutes = require("./routes/reviewRoutes");


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wisata", wisataRoutes);
app.use("/api/budaya", budayaRoutes);
app.use("/api/review", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
