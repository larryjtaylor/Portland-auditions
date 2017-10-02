import React from "react";
import Header from "./Header";
import Companies from "./Companies";
import Welcome from "./Welcome";
import { Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/companies" component={Companies}/>
      </Switch>
    </div>
  );
}

export default App;
