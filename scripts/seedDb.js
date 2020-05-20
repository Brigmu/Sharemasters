const mongoose = require('mongoose');
const db = require('../models/')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/shareish"
  );

const itemSeed = [
    {
        // itemId: "5ec25a887a6a714d905524aa",
        ownerId: "5ec24cc7c7e382486c6ff128",
        name: "Wheelbarrow",
        description: "10 gallon",
        category: "Misc.",
        address: "14359 15th Ave NE",
        city: "Seattle",
        state: "WA",
        zipCode: 98155,
        fullAddress: "14359 15th Ave NE, Seattle, WA 98125",
        coordinates: {
            lat: 47.733,
            lng: -122.313
        },
        price: 1,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524ab",
        ownerId: "5ec24cc7c7e382486c6ff128",
        name: "Shovel",
        description: "Flat edge",
        category: "Tool",
        address: "14359 15th Ave NE",
        city: "Seattle",
        state: "WA",
        zipCode: 98155,
        fullAddress: "14359 15th Ave NE, Seattle, WA 98125",
        coordinates: {
            lat: 47.733,
            lng: -122.313
        },
        price: 2,
        img: "",
        active: true,
        pending_request: true,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524ac",
        ownerId: "5ec24cc7c7e382486c6ff129",
        name: "Electric Weed Whacker",
        description: "Black and Decker. Two batteries. Each battery should last about 20-30 minutes",
        category: "Lawn",
        address: "14615 15th Ave NE",
        city: "Shoreline",
        state: "WA",
        zipCode: 98155,
        fullAddress: "14615 15th Ave NE, Shoreline, WA 98155",
        coordinates: {
            lat: 47.735,
            lng: -122.313
        },
        price: 3,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524ad",
        ownerId: "5ec24cc7c7e382486c6ff129",
        name: "Lawn Mower",
        description: "Honda. Self-propelled",
        category: "Lawn",
        address: "14615 15th Ave NE",
        city: "Shoreline",
        state: "WA",
        zipCode: 98155,
        fullAddress: "14615 15th Ave NE, Shoreline, WA 98155",
        coordinates: {
            lat: 47.735,
            lng: -122.313
        },
        price: 4,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524ae",
        ownerId: "5ec24cc7c7e382486c6ff12a",
        name: "Hammer",
        description: "Red hammer",
        category: "Tool",
        coordinates: {
            lat: 47.735,
            lng: -122.303
        },
        address: "2400 NE 147th St",
        city: "Shoreline",
        state: "WA",
        zipCode: 98155,
        fullAddress: "2400 NE 147th St, Shoreline, WA 98155",
        price: 5,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524af",
        ownerId: "5ec24cc7c7e382486c6ff12a", 
        name: "Circular Saw",
        description: "Stanley. 7 inch blade.",
        category: "Tool",
        coordinates: {
            lat: 47.735,
            lng: -122.303
        },
        address: "2400 NE 147th St",
        city: "Shoreline",
        state: "WA",
        zipCode: 98155,
        fullAddress: "2400 NE 147th St, Shoreline, WA 98155",
        price: 6,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524ag",
        ownerId: "5ec24cc7c7e382486c6ff12b", 
        name: "Pressure Washer",
        description: "Honda. 50ft hose.",
        category: "Tool",
        coordinates: {
            lat: 47.728,
            lng: -122.313
        },
        address: "13702 15th Ave NE #3102",
        city: "Seattle",
        state: "WA",
        zipCode: 98125,
        fullAddress: "13702 15th Ave NE #3102, Seattle, WA 98125",
        price: 7,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524ah",
        ownerId: "5ec24cc7c7e382486c6ff12b",
        name: "Car Jack",
        description: "Hand pump.",
        category: "Car",
        coordinates: {
            lat: 47.728,
            lng: -122.313
        },
        address: "13702 15th Ave NE #3102",
        city: "Seattle",
        state: "WA",
        zipCode: 98125,
        fullAddress: "13702 15th Ave NE #3102, Seattle, WA 98125",
        price: 8,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524ai",
        ownerId: "5ec24cc7c7e382486c6ff12c",
        name: "Paint Sprayer",
        description: "Interior and exterior paints.",
        category: "Tool",
        coordinates: {
            lat: 47.727,
            lng: -122.316
        },
        address: "1000 NE 135th St",
        city: "Seattle",
        state: "WA",
        zipCode: 98125,
        fullAddress: "1000 NE 135th St, Seattle, WA 98125",
        price: 9,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/01/2020"
    },
    {
        // itemId: "5ec25a887a6a714d905524aj",
        ownerId: "5ec24cc7c7e382486c6ff12c",
        name: "Chainsaw",
        description: "14 inch",
        category: "Lawn",
        coordinates: {
            lat: 47.727,
            lng: -122.316
        },
        address: "1000 NE 135th St",
        city: "Seattle",
        state: "WA",
        zipCode: 98125,
        fullAddress: "1000 NE 135th St, Seattle, WA 98125",
        price: 10,
        img: "",
        active: true,
        pending_request: false,
        is_rented: false,
        appointment: "",
        created_at: "01/02/2020"
    }
];

const userSeed = [
    {
        userId: "5ec24cc7c7e382486c6ff128",
        username: "setoc",
        firstName: "Courtney",
        lastName: "Seto",
        email: "courtney@gmail.com",
        coordinates: {
            lat: 47.733,
            lng: -122.313
        },
        address: "14359 15th Ave NE",
        city: "Seattle",
        state: "WA",
        zipCode: 98155,
        fullAddress: "14359 15th Ave NE, Seattle, WA 98125",
        owned: ["5ec25a887a6a714d905524aa","5ec25a887a6a714d905524ab"],
        rentalHistory: [],
        createdAt: new Date(Date.now())
    },
    {
        userId: "5ec24cc7c7e382486c6ff129",
        username: "crispy",
        firstName: "Christine",
        lastName: "Na",
        email: "christine@gmail.com",
        coordinates: {
            lat: 47.735,
            lng: -122.313
        },
        address: "14615 15th Ave NE",
        city: "Shoreline",
        state: "WA",
        zipCode: 98155,
        fullAddress: "14615 15th Ave NE, Shoreline, WA 98155",
        owned: ["5ec25a887a6a714d905524ac","5ec25a887a6a714d905524ad"],
        rentalHistory: [],
        createdAt: new Date(Date.now())
    },
    {
        userId: "5ec24cc7c7e382486c6ff12a",
        username: "ryntm",
        firstName: "Ryan",
        lastName: "Tam",
        email: "ryan@gmail.com",
        coordinates: {
            lat: 47.735,
            lng: -122.303
        },
        address: "2400 NE 147th St",
        city: "Shoreline",
        state: "WA",
        zipCode: 98155,
        fullAddress: "2400 NE 147th St, Shoreline, WA 98155",
        owned: ["5ec25a887a6a714d905524ae","5ec25a887a6a714d905524af"],
        rentalHistory: [],
        createdAt: new Date(Date.now())
    },
    {
        userId: "5ec24cc7c7e382486c6ff12b",
        username: "brigmue",
        firstName: "Brigham",
        lastName: "Mueller",
        email: "brigham@gmail.com",
        coordinates: {
            lat: 47.728,
            lng: -122.313
        },
        address: "13702 15th Ave NE #3102",
        city: "Seattle",
        state: "WA",
        zipCode: 98125,
        fullAddress: "13702 15th Ave NE #3102, Seattle, WA 98125",
        owned: ["5ec25a887a6a714d905524ag","5ec25a887a6a714d905524ah"],
        rentalHistory: [],
        createdAt: new Date(Date.now())
    },
    {
        userId: "5ec24cc7c7e382486c6ff12c",
        username: "mitch",
        firstName: "Michele",
        lastName: "Super",
        email: "michele@gmail.com",
        coordinates: {
            lat: 47.727,
            lng: -122.316
        },
        address: "1000 NE 135th St",
        city: "Seattle",
        state: "WA",
        zipCode: 98125,
        fullAddress: "1000 NE 135th St, Seattle, WA 98125",
        owned: ["5ec25a887a6a714d905524ai","5ec25a887a6a714d905524aj"],
        rentalHistory: [],
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

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });