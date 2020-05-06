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


// const testUsers = [
//   {
//     id: 1,
//     username: 'Brian'
//   }
// ]

// app.post('/api/signup', (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// })

// app.post('/api/login', (req, res) => {
//   console.log(req.body);
// })
// // Define API routes here
// app.get('/api/user/:id', (req, res) => {
//   let passedId = parseInt(req.params.id);
//   let index = 0;
//   for(let i = 0; i < testUsers.length; i++){
//     if(testUsers[i].id === passedId){
//       index = i;
//       break;
//     }
//   }
//   const user = testUsers[index];
//   res.json(user);
// })
// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});