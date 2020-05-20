import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { UserProvider } from "./utils/UserContext/UserContext";

import Signup from './pages/Signup/Signup';
import Home from "./pages/Home/Home";
import ItemContext from "./utils/ItemContext/ItemContext";
import Listings from './pages/Listings/Listings'
import ListingPage from "./pages/ListingPost/ListingPost";
import ItemPage from "./pages/Item/Item";
import RentalConfirmation from './pages/RentalConfirmation/RentalConfirmation';
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";

const connectEnsureLogin = require('connect-ensure-login');


function App() {
  const [itemListings, setItemListings] = useState([]);

  useEffect(() => {
    //API call
    //setItemListings(results)
    fetch('/api/items')
    .then(response => response.json())
    .then(results => {
      console.log(results);
      setItemListings(results);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <UserProvider>
    <ItemContext.Provider value={itemListings}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/signup' component={Signup} />
          <Route exact path = '/listings' component={Listings} />
          <Route exact path = '/newlisting' component={ListingPage} />
          <Route exact path = '/items/:id' component={ItemPage} />
          <Route exact path = '/rentalconfirm' component={RentalConfirmation} />
          <Route exact path = '/profile' component={Profile} />
          <Route exact path = '/editprofile' component={EditProfile} />
        </Switch>
  
      </div>
    </Router>
    </ItemContext.Provider>
    </UserProvider>
  );
}


export default App;
