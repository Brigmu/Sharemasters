const router = require("express").Router();
const passportRoutes = require("./passport");

router.use("/passport", passportRoutes);

module.exports = router;
