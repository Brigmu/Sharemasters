  // ----  PASSPORT ROUTES----

const db = require('../models');
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');
const path = require("path");

module.exports = function(app) {

  // Using the passport.authenticate middleware with passport-mongoose strategy
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.post("/api/login", (req, res, next) => {
    passport.authenticate('local', 
    (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.redirect(307, "/api/login");
      }

      req.login(user, function(err) {
        if (err) {
          return next(err);
        }

        return res.redirect('/');
      });
    })(req, res, next);
  });

   // Route for signing up a user. The user's password is automatically hashed
   // If the user is created successfully, proceed to log the user in, otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.register({
      username: req.username
    }, req.password)
    .then((newUser) => {
      db.Member.create({
        id: newUser.id,
        username: req.username,
        email: req.email,
        zipCode: req.zipCode,
        firstName: req.firstName,
        lastName: req.lastName
      })
      .then(() => {
        res.redirect(307, "/api/login");
      })
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.send({user: req.user})
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user/:id", (req, res) => {
    db.Member.findOne({ 
      _id: mongojs.ObjectId(req.params.id)
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  });

  
  //Routes for rendering pages

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../client/public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../client/public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", connectEnsureLogin.ensureLoggedIn(), function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/members.html"));
  });
};
