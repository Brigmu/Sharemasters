import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from './pages/Signup/Signup';
import Home from "./pages/Home/Home";
import ItemContext from "./utils/ItemContext/ItemContext";
import Listings from './pages/Listings/Listings'
import ListingPage from "./pages/ListingPost/ListingPost";
import ItemPage from "./pages/Item/Item"  

const connectEnsureLogin = require('connect-ensure-login');


function App() {
  const [itemListings, setItemListings] = useState([]);

  useEffect(()=>{
    //API call
    //setItemListings(results)
    fetch('/api/items')
    .then(response => response.json())
    .then(results => {
      console.log(results);
      setItemListings(results);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <ItemContext.Provider value={itemListings}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/signup' component={Signup} />
          <Route exact path = '/listings' component={Listings} />
          <Route exact path = '/newlisting' component={ListingPage} />
          <Route exact path = '/items/:id' component={ItemPage} />
        </Switch>
  
      </div>
    </Router>
    </ItemContext.Provider>
  );
}


export default App;
