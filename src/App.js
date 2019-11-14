import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./component/home/home";
import Landing from "./component/home/landingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/landing" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
