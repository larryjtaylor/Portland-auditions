import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {

  var navbar={
    height: "100px",
    position: "fixed",
    width: "100%",
    top: "0%",
    backgroundColor: "black",
    zIndex: "1"
  }

  var header={
    color: "#3366BB",
    marginLeft: "2%",
    paddingTop: "2%",
    width: "150%",
    position: "fixed",
    color: "white"
  }

  var links={
    position: "absolute",
    top: "50%",
    right: "5%",
    color: "white"
  }
  var linkColor={
    color: "white"

  }
  return (
    <div className="navbar navbar-default" style={navbar}>
     <div className="container-fluid">
       <div className="navbar-header">
         <h1 style={header}>Portland Audition Database</h1>
       </div>
       <div className="nav navbar-nav navbar-right">
         <h4 style={links}><NavLink to="/" style={linkColor}>Home</NavLink> | <NavLink to="/companies" style={linkColor}>Companies</NavLink> | <NavLink to="/contact" style={linkColor}>Contact</NavLink></h4>
       </div>
     </div>
   </div>
  );
}

export default Header;
