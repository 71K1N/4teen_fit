import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Grupo from "./pages/grupo";
import Exercicio from "./pages/exercicio";
import Treino from "./pages/treino";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/grupo/" component={Grupo} />
      <Route path="/treino/" component={Treino} />
      <Route path="/grupo/" component={Grupo} />
      <Route path="/exercicio/" component={Exercicio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
