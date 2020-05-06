const mongoose = require('mongoose');
const db = require('../models/')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/shareish"
  );

const itemSeed = [
    {
        // _id: "1",
        owner_id: "1",
        name: "Wheelbarrow",
        description: "10 gallon",
        category: "Misc.",
        image_url: "https://mobileimages.lowes.com/product/converted/755625/755625042736.jpg?size=lg",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "2",
        owner_id: "1",
        name: "Shovel",
        description: "Flat edge",
        category: "Tool",
        image_url: "https://mobileimages.lowes.com/product/converted/755625/755625008961.jpg?size=lg",
        pending_request: true,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "3",
        owner_id: "2",
        name: "Electric Weed Whacker",
        description: "Black and Decker. Two batteries. Each battery should last about 20-30 minutes",
        category: "Lawn",
        image_url: "https://mobileimages.lowes.com/product/converted/084931/084931847569.jpg?size=lg",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "4",
        owner_id: "2",
        name: "Lawn Mower",
        description: "Honda. Self-propelled",
        category: "Lawn",
        image_url: "https://mobileimages.lowes.com/product/converted/751058/751058045078.jpg?size=lg",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "5",
        owner_id: "3",
        name: "Hammer",
        description: "Red hammer",
        category: "Tool",
        image_url: "https://mobileimages.lowes.com/product/converted/885911/885911570701.jpg?size=lg",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "6",
        owner_id: "3", 
        name: "Circular Saw",
        description: "Stanley. 7 inch blade.",
        category: "Tool",
        image_url: "https://mobileimages.lowes.com/product/converted/692042/692042006470.jpg?size=lg",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "7",
        owner_id: "4", 
        name: "Pressure Washer",
        description: "Honda. 50ft hose.",
        category: "Tool",
        image_url: "https://mobileimages.lowes.com/product/converted/841821/841821052829.jpg?size=lg",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "8",
        owner_id: "4",
        name: "Car Jack",
        description: "Hand pump.",
        category: "Car",
        image_url: "https://mobileimages.lowes.com/product/converted/026666/026666813273.jpg?size=lg",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "9",
        owner_id: "5",
        name: "Paint Sprayer",
        description: "Interior and exterior paints.",
        category: "Tool",
        image_url: "",
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // _id: "10",
        owner_id: 5,
        name: "Chainsaw",
        description: "14 inch",
        category: "Lawn",
        image_url: "https://mobileimages.lowes.com/product/converted/024964/024964272327.jpg?size=lg",
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