const router = require("express").Router();
const billRoutes = require("./bill");

// Bill Routes
router.use("/bill", billRoutes);

module.exports = router;
