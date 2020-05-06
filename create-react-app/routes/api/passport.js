  // ----  PASSPORT ROUTES----
const passport = require('passport');
const router = require("express").Router();
const User = require("../../models/user");


// api/passport/login
router.post("/login", function(req, res, next) {
  passport.authenticate('local', 
    (err, user, info) => {
      if (err) { 
        return res.status(400).json({errors : err }); 
      }
      if (!user) { 
        return res.status(400).json({errors : "No user found" });
      }

      req.logIn(user, (err) => {
        if (err) { 
          res.status(400).json({errors : err }); 
        }
        return res.status(200).json({ success: `logged in ${user.id}`});
      });
    })(req, res, next)
});
  
// api/passport/signup
// Route for signing up a user. The user's password is automatically hashed
// If the user is created successfully, proceed to log the user in, otherwise send back an error
router.post("/signup", function(req, res) {
  console.log(req.body);
  User
    .register({ username: req.body.username }, req.body.password)
    .then(() => { res.redirect(307, "/api/passport/login") })
    .catch((err) => res.status(422).json(err));
});

// api/passport/logout
// Route for logging user out
router.get("/logout", function(req, res) {
  req.logout();
});

// // api/passport/user_data
// // Route for getting some data about our user to be used client side
router.get("/user_data", function(req, res) {
  res.send({ user: req.user })
});

module.exports = router;
