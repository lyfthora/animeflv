import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./fontawesome.css";
const home = lazy(() => import("./components/home/home"));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={home} exact />
      </Switch>
    </Router>
  );
}

export default App;
