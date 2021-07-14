import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/User/Login";
import ToDo from "./pages/ToDo";
import NavBar from "./components/NavBar";


export const isAuthenticated = () => localStorage.getItem("uid") !== null;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path="/home">
      {
      isAuthenticated() ? (
         <>
          <NavBar />
          <ToDo />
        </>): <Redirect to="/login"/> 
    }
        </Route>
      
        <Route exact path="/">
      {
      isAuthenticated() ? (
         <>
          <NavBar />
          <ToDo />
        </>): <Redirect to="/login"/> 
    }
        </Route>
        
        <Route exact path="/login">
          <NavBar />
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
