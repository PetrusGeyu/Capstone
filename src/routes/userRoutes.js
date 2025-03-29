const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");

// GET /api/user/me
router.get("/me", verifyToken, userController.getUserProfile);

module.exports = router;
