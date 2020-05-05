import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from './pages/Signup/Signup';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ItemPage from "./pages/Item/Item"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/signup' component={Signup} />
          <Route exact path = '/login' component={Login} />
          <Route exact path = '/items/:id' component={ItemPage} />
        </Switch>
      
      </div>
    </Router>
  );
}


export default App;
