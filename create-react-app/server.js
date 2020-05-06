const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const db = require("./models");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/client/public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


// Initialize MongoDb connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sharemasters", { useNewUrlParser: true, useUnifiedTopology: true });

// Define passport authentication strategy
passport.use(db.User.createStrategy());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
