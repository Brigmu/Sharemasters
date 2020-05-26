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
app.use(express.static(__dirname + "/client/public"));

// adding cors so that frontend can talk to backend
app.use(cors());

app.get('/api/items/all', (req, res) => {
  db.Item.find({isRented: false})
  .then(data => {
    res.json(data);
  })
  .catch(err => console.log(err));     
})

app.get('/api/items/:id', (req, res) => {
  db.Item.find({_id: req.params.id})
  .populate('ownerId')
  .then(data => {
    console.log(data)
    res.json(data)
  
  })
  // .catch(err => res.status(422).json(err));
})

app.put('/api/items/:id', (req, res) => {
  db.Item.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
})

app.put('/api/items/rentstatus/:id', (req, res) => {
  db.Item.findByIdAndUpdate(req.params.id, req.body)
  .then(data => res.json(data))
  .catch(err => res.status(422).json(err))
})

app.put('/api/items/pendingstatus/:id', (req, res) => {
  db.Item.findByIdAndUpdate(req.params.id, req.body)
  .then(data => res.json(data))
  .catch(err => res.status(422).json(err))
})

app.put('/api/profile/rentals/reomve/:id', (req, res) => {
  db.Profile.update({ _id: req.params.id }, { $pull: { rentals: req.body.itemId }})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
})

app.put('/api/items/appointments/:id', (req, res) => {
  db.Item.update({_id: req.params.id}, {$pull: {currentAppointment: req.body.appointmendId}, $push: {appointmentHistory: req.body.appointmendId}})
  .then(data => res.json(data))
  .catch(err => res.status(422).json(err))
})

app.get('/api/items/all/unrented', (req, res) => {
  db.Item.find({isRented: false})
  .then(data => {
    res.json(data);
  })
  .catch(err => console.log(err));     
})

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


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// front end test api calls 
// Define API routes here
// app.get('/api/items', (req, res) => {
//   res.json(testItems);
// })

app.get('/api/user/:id', (req, res) => {
  let passedId = parseInt(req.params.id);
  let index = 0;
  for(let i = 0; i < testUsers.length; i++){
    if(testUsers[i].id === passedId){
      index = i;
      break;
    }
  }
  const user = testUsers[index];
  res.json(user);
})
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