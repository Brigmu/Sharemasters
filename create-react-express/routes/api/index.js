const router = require("express").Router();
const passportRoutes = require("./passport");
const profileRoutes = require("./profile");

router.use("/passport", passportRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
