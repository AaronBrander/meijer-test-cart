import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

//const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const createHistory = require("history").createBrowserHistory;
const history = createHistory();

class App extends Component {
    
    render() {
        return (
            <Router baseUrl="/"  history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="sign-up" component={SignUp} />
             
            </Switch>
          </Router>
        );
    }
}

export default App;