const express = require("express");
const router = express.Router();
const WisataController = require("../controllers/wisataController");

router.get("/", WisataController.getAllWisata);
router.get("/:id", WisataController.getWisataById);
router.post("/", WisataController.createWisata);
router.put("/:id", WisataController.updateWisata);
router.delete("/:id", WisataController.deleteWisata);

module.exports = router;
