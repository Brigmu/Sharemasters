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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shareish", { useNewUrlParser: true, useUnifiedTopology: true });

// Define passport authentication strategy
passport.use(db.User.createStrategy());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());


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

const testItems = [
  {
    id: 'byl1',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw1',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl2',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw2',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl3',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw3',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl4',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw4',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl5',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw5',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl6',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw6',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl7',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw7',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl8',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw8',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl9',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw9',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl10',
    category: 'Yard',
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw10',
    category: 'Yard',
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

// Define API routes here
app.get('/api/items', (req, res) => {
  res.json(testItems);
})

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
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});