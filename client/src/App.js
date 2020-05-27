import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./utils/UserContext/UserContext";
import Signup from './pages/Signup/Signup';
import Home from "./pages/Home/Home";
import Listings from './pages/Listings/Listings'
import ListingPage from "./pages/ListingPost/ListingPost";
import ItemPage from "./pages/Item/Item";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";


function App() {

  return (
    <UserProvider>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/signup' component={Signup} />
          <Route exact path = '/listings' component={Listings} />
          <Route exact path = '/newlisting' component={ListingPage} />
          <Route exact path = '/items/:id' component={ItemPage} />
          <Route exact path = '/profile' component={Profile} />
          <Route exact path = '/editprofile' component={EditProfile} />
        </Switch>
  
      </div>
    </Router>
    </UserProvider>
  );
}


export default App;
