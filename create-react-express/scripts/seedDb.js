const mongoose = require('mongoose');
const db = require('../models/')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/shareish"
  );

const itemSeed = [
    {
        owner_id: "1",
        item_id: "projector_screen_clgino",
        name: "Outdoor Projector Screen",
        description: "outdoor projector screen",
        category: "Electronics",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
        price: "",
        img: "https://res.cloudinary.com/djz8ibfox/image/upload/v1589498143/appImages/projector_screen_clgino.png",
        pending_request: false,
        is_rented: false,
        renter_id: "",
        active: true,
        created_at: "01/01/2020",
    },
    {
        owner_id: "1",
        item_id: "projector_uulm1c",
        name: "Projector",
        description: "Portable 6,000-lumen WUXGA (1920 x 1200) LCD Video Projector with 10,000:1 Contrast, 1.6 x Optical Zoom, Flexible Setup Functions and Comprehensive Connection Options",
        category: "Electronics",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
        price: "",
        img: "https://res.cloudinary.com/djz8ibfox/image/upload/v1589498112/appImages/projector_uulm1c.jpg",
        pending_request: false,
        is_rented: false,
        active: true,
        created_at: "01/01/2020",
    },
    {
        owner_id: "2",
        item_id: "karaoke_jh1uxt",
        name: "Portable Karaoke System",
        description: " A professional sounding karaoke speaker that will interface with any of your existing devices to view the words to the songs on a screen of your choice (tablet, laptop, iPhone, etc). The system is rechargeable so you can play it wirelessly on the go! It also has Bluetooth built in allowing you to wirelessly stream the music from your iPad or Bluetooth phone to the speaker.",
        category: "Electronics",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
        price: "",
        img: "https://res.cloudinary.com/djz8ibfox/image/upload/v1589498134/appImages/karaoke_jh1uxt.jpg",
        pending_request: true,
        is_rented: false,
        active: true,
        created_at: "04/25/2020"
    },
    {
        owner_id: "2",
        item_id: "speakers_fssur1",
        name: "Outdoor Speakers",
        description: "200W 12” Outdoor Portable PA Kit–Bluetooth Wireless Speaker Microphone Battery",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
        price: "",
        category: "Electronics",
        img: "https://res.cloudinary.com/djz8ibfox/image/upload/v1589498110/appImages/speakers_fssur1.jpg",
        pending_request: false,
        is_rented: false,
        active: true,
        created_at: "05/04/2020"
    },
    {
        owner_id: "3",
        item_id: "6a071073183df73e3dc364ea05b6b0f4",
        name: "food warmer",
        description: '27.5"W Freestanding Warming Drawer w/ (2) 21.5" Compartments, 120v',
        address: "",
        city: "",
        state: "",
        zipCode: "",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
        price: "50",
        category: "Kitchen Appliances",
        img: "https://res.cloudinary.com/djz8ibfox/image/upload/v1589501919/appImages/nog8onlbupvey6bzwjza.jpg",
        pending_request: false,
        is_rented: false,
        active: true,
        created_at: "05/14/2020"
    },

];

const appointmentSeed = [
    {
        appointment_id: "",
        item_id: "",
        renter_id: "",
        startDate: "",
        endDate: "",
        is_returned: false,
        is_cancelled: false        
    }
]

const userSeed = [
    {
        firstName: "Courtney",
        lastName: "Seto",
        email: "courtney@gmail.com",
        username: "setoc",        
        password: "123",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
        items: {
            rented: ["itemId"],
            owned: ["1","2"]
        },
        createdAt: new Date(Date.now())
    },
    {
        firstName: "Christine",
        lastName: "Na",
        email: "christine@gmail.com",        
        username: "crispy",
        password: "123",
        address: "",
        city: "",
        state: "",
        zipCode: "98101",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
        items: {
            rented: [],
            owned: ["3","4"]
        },
        createdAt: new Date(Date.now())
    },
    {
        firstName: "Ryan",
        lastName: "Tam",
        email: "ryan@gmail.com",        
        username: "ryntm",        
        password: "123",
        address: "",
        city: "",
        state: "",
        zipCode: 98155,
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
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
        lastName: "Acheson",
        email: "michele@gmail.com",
        username: "mitch",        
        password: "123",
        address: "",
        city: "",
        state: "",
        zipCode: "98014",
        fullAddress: "",
        coordinates: {
            lat: "",
            long: "",
        },
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