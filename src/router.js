import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/User/Login";
import ToDo from "./pages/ToDo";
import NavBar from "./components/NavBar";

const Routes = () => {
  const [uuid, setUuid] = useState(localStorage.getItem("uid"));
  let isAuth = uuid !== null;

  const handleLogin = (uuid) => {
    setUuid(uuid);
  };
  const handleLogOut = () => {
    setUuid(null);
  };

  return (
    <BrowserRouter>
      <Switch>
        {isAuth ? (
          <>
            <Route exact path="/home">
              <>
                <NavBar handleLogOut={handleLogOut} />
                <ToDo />
              </>
            </Route>
            <Redirect to="/home" />
          </>
        ) : (
          <>
            <Route exact path="/login">
              <NavBar handleLogOut={handleLogOut} />
              <Login handleLogin={handleLogin} />
            </Route>
            <Redirect to="/login" />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
