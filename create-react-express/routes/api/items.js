const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/items/:id"
router.route("/:id")
  .get(itemController.findOne);
  // .put(itemController.update)

module.exports = router;