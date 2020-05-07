  // ----  PASSPORT ROUTES----
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('passport');

// api/passport/login
router.post("/login", userController.findUser);
  
// api/passport/signup
router.post("/signup", userController.addUser);


// api/passport/logout
// Route for logging user out
router.get("/logout", userController.userLogout);

// api/passport/user_data
// Route for getting some data about our user to be used client side
router.get("/user_data", userController.findUser);

module.exports = router;
