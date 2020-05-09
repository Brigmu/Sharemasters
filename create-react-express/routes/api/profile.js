  // ----  PASSPORT ROUTES----
const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// api/profile/users
router.get("/users", profileController.findAll);

// api/profile
router.post("/", profileController.addOne);
  
// api/profile/:id
router.route("/:id")
  .get(profileController.findOne)
  .put(profileController.update)

module.exports = router;
