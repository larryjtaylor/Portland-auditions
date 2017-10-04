import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Companies from "./Companies";
import Contact from "./Contact";
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
        <Route path="/contact" component={Contact}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
