import { useKeycloak } from "react-keycloak";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import { PrivateRoute } from "../utils/PrivateRoute";
import Cfp from "../pages/Cfp";

export const AppRouter = () => {
  const [, initialized] = useKeycloak();
  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute roles={['user']} path="/cfp" component={Cfp} />
      </Switch>
    </BrowserRouter>
  )
}