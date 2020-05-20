const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/items/:id"
router.route("/:id")
  .get(itemController.findById)
  .put(itemController.renterRequest)
  
  // .put(itemController.update)

// doesn't work
router.route("/all")
  .get(itemController.findAll)


router.route('/')
  .post(itemController.create)



module.exports = router;