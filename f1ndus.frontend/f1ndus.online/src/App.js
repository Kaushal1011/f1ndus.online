import React from "react";
import Home from "./Components/Screens/Home";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup"; 
import Dashboard from "./Components/Screens/dashboard";
import Search from "./Components/Screens/Search";
import QuickSearch from "./Components/Screens/QuickSearch";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user/login">
        <Login />
      </Route>
      <Route path="/user/signup">
        <Signup />
      </Route>
      <Route path="/user/dashboard">
        <Dashboard />
      </Route>
      <Route path="/user/search">
        <Search />
      </Route>
      <Route path="/user/quicksearch">
        <QuickSearch />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
export default App;