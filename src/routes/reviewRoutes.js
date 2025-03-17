const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/reviewController");

// Mendapatkan semua review
router.get("/", ReviewController.getAllReviews);

// Menambahkan review baru
router.post("/", ReviewController.createReview);

module.exports = router;
