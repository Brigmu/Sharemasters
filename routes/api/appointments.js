const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

router.route("/")
    .post(appointmentController.create)

router.route("/cancel")
    .put(appointmentController.updateCancelled)

router.route("/return")
    .put(appointmentController.updateReturn)

module.exports = router;