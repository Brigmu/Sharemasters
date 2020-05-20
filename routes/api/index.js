const router = require("express").Router();
const passportRoutes = require("./passport");
const profileRoutes = require("./profile");
const itemRoutes = require("./items");
const appointmentRoutes = require("./appointments");

router.use("/passport", passportRoutes);
router.use("/profile", profileRoutes);
router.use("/items", itemRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
