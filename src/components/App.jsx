import React from "react";
import Header from "./Header";
import Companies from "./Companies";
import Admin from "./Admin";
import Welcome from "./Welcome";
import { Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/companies" component={Companies}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;
