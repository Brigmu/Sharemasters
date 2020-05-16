const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/items/:id"
router.route("/:id")
  .get(itemController.findById);
  // .put(itemController.update)

router.get('/all', itemController.findAll)

module.exports = router;