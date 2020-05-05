const router = require("express").Router();
const itemRoutes = require("./items");

router.use("/items", itemRoutes);

module.exports = router;