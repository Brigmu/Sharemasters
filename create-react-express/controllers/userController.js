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
          res.status(400).json({message: 'Unable to process authentication request'});
        }
        req.login(user, (err) => {
          if (err) {
            res.status(422).json({message: 'Invalid username or password'});
          } else {
            return res.status(200).json({message: 'You were authenticated & logged in!'});
          }
        })
      })(req, res, next)
  },


  addUser: function(req, res) {
    db.User
      .register({username: req.body.username} , req.body.password, (err, user) => {
        if (err) {
          res.status(422).json({
            success: false,
            message: 'Unable to register user',
            err: err
          })
        } else {
          res.json({
            success: true,
            message: "Your account has been saved"
          })

        }
      })
  },


  userLogout: function(req, res) {
    req.logout();
    return res.json({
      message: "Your account has been logged out"
    });
  },


  findUser: function(req, res) {
    console.log(req.user)
    return res.status(200).json({ user: req.user })
  },

  deleteUser: function(req, res) {
    db.User.deleteOne({ username: req.params.username })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  }
};
