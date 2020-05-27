const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/items/:id"
router.route("/:id")
  .get(itemController.findById)
  .put(itemController.itemUpdate)
  
  // .put(itemController.update)

// doesn't work
// router.route("/all")
//   .get(itemController.findAll)

// router.route('/unrented')
//   .get(itemController.getAllUnrented)

router.route('/all/unrented')
  .get(itemController.getAllUnrented)

router.route('/')
  .post(itemController.create)

router.route('/rentstatus/:id')
  .put(itemController.updateRentStatus)

router.route('/pendingstatus/:id')
  .put(itemController.updatePendingStatus)

router.route('appointments/:id')
  .put(itemController.updateAppointments)

module.exports = router;