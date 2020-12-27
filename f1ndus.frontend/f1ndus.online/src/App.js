import React from "react";
import Home from "./Components/Screens/Home";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup";
import Dashboard from "./Components/Screens/dashboard";
import Search from "./Components/Screens/Search";
import { Ruexp } from "./Components/Screens/Ruexp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
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
        <Route path="/user/areuexp">
          <Ruexp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
