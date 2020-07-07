import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Grupo from "./pages/grupo";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/grupo/" component={Grupo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
