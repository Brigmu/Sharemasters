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
  db.Item.find({})
//   .populate({path:'ownerId',
// model: 'User'})
  .then(data => {
    res.json(data);
  })
  .catch(err => console.log(err));
        // .populate({path: 'appointments', 
        //     populate: [{
        //         path: 'current',
        //         model: 'Appointments'
        //     },
        //     {
        //         path: 'history',
        //         model: 'Appointments'
        //     }
        //     ]
        // })
})

app.get('/api/items/:id', (req, res) => {
  db.Item.findById(req.params.id)
  // .populate({path:'ownerId', model: 'Profile'})
  .then(data => res.json(data))
  .catch(err => res.status(422).json(err));
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

// front-end test code
const testUsers = [
  {
    id: 1,
    username: 'Brian'
  }
]

const testItems = [
  {
    id: 'byl1',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw1',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl2',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw2',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl3',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw3',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl4',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw4',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl5',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw5',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl6',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw6',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl7',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw7',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl8',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw8',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl9',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw9',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'byl10',
    category: 'Yardwork',
    price: 50.00,
    name: 'Lawnmower',
    img: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'cyw10',
    category: 'Yardwork',
    price: 50.00,
    name: 'Wheelbarrow',
    img: 'https://images.pexels.com/photos/1557768/pexels-photo-1557768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

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