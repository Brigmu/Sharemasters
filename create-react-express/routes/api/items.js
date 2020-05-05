const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/books"
// router.route("/")
//   .get(itemController.findAll)
//   .post(itemController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(itemController.findById)
  // .put(itemController.update)
  // .delete(itemController.remove);

module.exports = router;