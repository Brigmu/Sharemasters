  // ----  PASSPORT ROUTES----
const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// api/profile/users
router.get("/users", profileController.findAll);

// api/profile
router.post("/", profileController.addOne);
  
// api/profile/:id    --- returns user with matching userId (passport ObjectId)
router.route("/:id")
  .get(profileController.findOne)
  .put(profileController.update)

// api/profile/rentals/:id
router.route("/rentals/:id")
  .put(profileController.addRental)

// api/profile/history/:id
router.route("/history/:id")
  .put(profileController.addRentalHistory)

// api/profile/owned/:id
router.route("/owned/:id")
  .put(profileController.addOwned)

module.exports = router;
