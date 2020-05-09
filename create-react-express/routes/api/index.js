const router = require("express").Router();
const passportRoutes = require("./passport");
const profileRoutes = require("./profile");
const itemRoutes = require("./items");

router.use("/passport", passportRoutes);
router.use("/profile", profileRoutes);
router.use("/items", itemRoutes);

module.exports = router;
