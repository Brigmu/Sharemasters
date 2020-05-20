const mongoose = require('mongoose');
const db = require('../models/')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/shareish"
  );


const blankItem = {
    ownerId: '',
    name: '',
    description: '',
    category: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    fullAddress: '',
    coordinate: {
        lat: '',
        lng: '',
    },
    price: '',
    img: '',
    pendingRequest: false,
    isRented: false,
    active: true,
 }
const itemSeed2 = [
    {
       ownerId: 1,
       name: 'Lawnmower',
       description: 'Honda. Self propelled',
       category: 'Yardwork',
       address: '1111 NE 1st ST',
       city: 'Seattle',
       state: 'WA',
       zipCode: '11111',
       fullAddress: '1111 NE 1st ST Seattle, WA 11111',
       coordinate: {
           lat: '1111',
           lng: '1111',
       },
       price: 10,
       img: '',
       pendingRequest: false,
       isRented: false,
       active: true,
    },
    {
        ownerId: 1,
        name: 'Laptop',
        description: 'Dell laptop',
        category: 'Electronics',
        address: '1111',
        city: 'Seattle',
        state: 'WA',
        zipCode: '98101',
        fullAddress: '',
        coordinate: {
            lat: '',
            lng: '',
        },
        price: 500,
        img: '',
        pendingRequest: false,
        isRented: false,
        active: true,
     },
     {
        ownerId: 1,
        name: 'Bounce House',
        description: '25ft inflatable bounce house',
        category: 'Events',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        fullAddress: '',
        coordinate: {
            lat: '',
            lng: '',
        },
        price: 200,
        img: '',
        pendingRequest: true,
        isRented: false,
        active: true,
     },

]

const itemSeed = [
    {
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

const userSeed2 = [
    {
        username: 'brigmu',
        password: 'password123'
    },
    {
        username: 'macheson',
        password: 'password123'
    }
]

const profileSeed = [
    {
        userId: "5ec301df8c8418584878d841",
        username : "brigmu",
        firstName: 'Brigham',
        lastName: 'Mueller',
        email: 'testemail@email.com',
        coordinates: {
            lat: '',
            lng: ''
        },
        address: '',
        city: '',
        state: '',
        zipCode: 11111,
        rentals: [],
        owned: [
            "5ec306208c3e895b04ebdab0",
            "5ec306208c3e895b04ebdab1",
            "5ec306208c3e895b04ebdab2"
        ]
    }
]

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed2))
  .then(data => {
    console.log(data.result.n + " item records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Profile
    .remove({})
    .then(() => db.Profile.collection.insertMany(profileSeed))
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
//   .then(() => db.User.collection.insertMany(userSeed2))
//   .then(data => {
//     console.log(data.result.n + " user records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });