const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/items/:id"
router.route("/:id")
  .get(itemController.findById)
  // .get(itemController.getAppointmentInfo)
  .put(itemController.renterRequest)

router.route("/:id/rental-cancel")
  .put(itemController.itemAppointmentCancelled)

  // will make isRented true and pendingRequest false
// router.route("/:id/rental-approved")
//   .put(itemController.rentalApprove)

// router.route("/:id/return-confirmed")
//   .put(itemController.returnConfirmed)
  
  // .put(itemController.update)

// doesn't work
router.route("/all")
  .get(itemController.findAll)


router.route('/')
  .post(itemController.create)



module.exports = router;