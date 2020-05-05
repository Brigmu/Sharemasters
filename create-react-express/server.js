const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
// const routes = require('./routes')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const testUsers = [
  {
    id: 1,
    username: 'Brian'
  }
]

// Define API routes here
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

// const db = require('./models')
// app.get('/api/items/:id', (req, res) => {
//   db.Item.findById(parseInt(req.params.id), (err, data) => {
//     if (err) {
//       console.log(err);
//     } else 
//   res.json(data);
// })
// })



// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
