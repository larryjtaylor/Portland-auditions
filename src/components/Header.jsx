import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <h1>Help Queue!</h1>
      <Link to="/">Home</Link> | <Link to="/companies">Companies</Link>
    </div>
  );
}

export default Header;
