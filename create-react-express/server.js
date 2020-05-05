const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes/')
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

const testUsers = [
  {
    id: 1,
    username: 'Brian'
  }
]

// Define API routes here
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
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// const db = require('./models')
// app.get('/api/items/1', (req, res) => {
//   db.Item.findAll({}, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else 

//   res.json(data);
//   // console.log('hi from server route')
// })
// })

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shareish");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
