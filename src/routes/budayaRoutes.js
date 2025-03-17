const express = require("express");
const router = express.Router();
const budayaController = require("../controllers/budayaController");

router.get("/", budayaController.getAllBudaya);
router.get("/:id", budayaController.getBudayaById);
router.post("/", budayaController.createBudaya);
router.put("/:id", budayaController.updateBudaya);
router.delete("/:id", budayaController.deleteBudaya);

module.exports = router;
