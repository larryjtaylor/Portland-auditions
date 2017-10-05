import React from "react";
import { NavLink } from "react-router-dom";

function Footer(props) {

  var navbar={
    height: "25px",
    position: "fixed",
    width: "100%",
    margin: "0",
    bottom: "0",
    backgroundColor: "black",
    zIndex: "1",
    textAlign: "center"
  };

  var linkColor={
    color: "white",
  };
  return (

       <div className="navbar-footer">
         <h4 style={navbar}><NavLink to="/admin" style={linkColor}>Admin</NavLink></h4>
       </div>
  );
}

export default Footer;
