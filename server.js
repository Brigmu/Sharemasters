const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const db = require("./models");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors")


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(__dirname + "/client/public"));

// adding cors so that frontend can talk to backend
app.use(cors());


// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());


// Initialize MongoDb connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shareish", { useNewUrlParser: true, useUnifiedTopology: true });

// Define passport authentication strategy
passport.use(db.User.createStrategy());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// front-end test data code
app.use(routes);

// Send every other request to the React app

// Add routes, both API and view
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});