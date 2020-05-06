const db = require("../models");
const passport = require('passport');

// Defining methods for the user controller


  // Using the passport.authenticate middleware with passport-mongoose strategy
  // If the user has valid login credentials, send them to the users page.
  // Otherwise the user will be sent an error

module.exports = {
  checkUser: function(req, res, next) {
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
  },


  addUser: function(req, res) {
    db.User
      .register(
        { username: req.username }, 
        req.password
      )
      .then(() => { res.redirect(307, "/api/passport/login") })
      .catch((err) => res.status(422).json(err));
  },


  userLogout: function(req, res) {
    req.logout();
    res.redirect("/");
  },


  findUser: function(req, res) {
    res.send({ user: req.user })
  }
};
