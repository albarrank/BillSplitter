const router = require("express").Router();
const billController = require("../../controllers/billController");

// Mathces routes with "api/bill"
router.route("/").post(billController.totalLeft);

module.exports = router;
