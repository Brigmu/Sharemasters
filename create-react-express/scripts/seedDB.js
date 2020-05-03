const mongoose = require('mongoose');
const db = require('../models/')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/shareish"
  );

const itemSeed = [
    {
        _id: "1",
        owner_id: "1",
        name: "Wheelbarrow",
        description: "10 gallon",
        category: "Misc.",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "2",
        owner_id: "1",
        name: "Shovel",
        description: "Flat edge",
        category: "Tool",
        pending_request: true,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "3",
        owner_id: "2",
        name: "Electric Weed Whacker",
        description: "Black and Decker. Two batteries. Each battery should last about 20-30 minutes",
        category: "Lawn",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "4",
        owner_id: "2",
        name: "Lawn Mower",
        description: "Honda. Self-propelled",
        category: "Lawn",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "5",
        owner_id: "3",
        name: "Hammer",
        description: "Red hammer",
        category: "Tool",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "6",
        owner_id: "3", 
        name: "Circular Saw",
        description: "Stanley. 7 inch blade.",
        category: "Tool",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "7",
        owner_id: "4", 
        name: "Pressure Washer",
        description: "Honda. 50ft hose.",
        category: "Tool",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "8",
        owner_id: "4",
        name: "Car Jack",
        description: "Hand pump.",
        category: "Car",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "9",
        owner_id: "5",
        name: "Paint Sprayer",
        description: "Interior and exterior paints.",
        category: "Tool",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        _id: "10",
        owner_id: 5,
        name: "Chainsaw",
        description: "14 inch",
        category: "Lawn",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    }
];

const userSeed = [
    {
        _id: "1",
        firstName: "Courtney",
        lastName: "Seto",
        password: "123",
        zipCode: 98101,
        username: "setoc",
        email: "courtney@gmail.com",
        items: {
            rented: [],
            owned: ["1","2"]
        },
        createdAt: new Date(Date.now())
    },
    {
        _id: "2",
        firstName: "Christine",
        lastName: "Na",
        password: "123",
        zipCode: 98101,
        username: "crispy",
        email: "christine@gmail.com",
        items: {
            rented: [],
            owned: ["3","4"]
        },
        createdAt: new Date(Date.now())
    },
    {
        _id: "3",
        firstName: "Ryan",
        lastName: "Tam",
        password: "123",
        zipCode: 98155,
        username: "ryntm",
        email: "ryan@gmail.com",
        items: {
            rented: [],
            owned: ["5","6"]
        },
        createdAt: new Date(Date.now())
    },
    {
        _id: "4",
        firstName: "Brigham",
        lastName: "Mueller",
        password: "123",
        zipCode: 98155,
        username: "brigmue",
        email: "brigham@gmail.com",
        items: {
            rented: [],
            owned: ["7","8"]
        },
        createdAt: new Date(Date.now())
    },
    {
        _id: "5",
        firstName: "Michele",
        lastName: "Super",
        password: "123",
        zipCode: 98101,
        username: "mitch",
        email: "michele@gmail.com",
        items: {
            rented: [],
            owned: ["9","10"]
        },
        createdAt: new Date(Date.now())
    }
]


db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " item records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//   db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " user records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });