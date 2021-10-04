import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import Quiz from "./quiz";
class MainComponent extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/quiz" component={Quiz} />
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
export default MainComponent;
