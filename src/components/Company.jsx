import React from "react";
import PropTypes from "prop-types";

function Company(props) {
  let companyDetails =
    <div>
      <h3>{props.name} - {props.location}</h3>
      <p><em>{props.description}</em></p>
      <p><a href="{props.url}" target="blank">{props.url}</a></p>
      (img src={props.image})
      <hr/>
    </div>;
  if (props.currentRoute === "/admin") {
    return(
      <div>
        {companyDetails}
        <button onClick={() => { props.handleClosingCompany(props.id); }}>Remove Company</button>
      </div>
    );
  } else {
    return(
      <div>
      {companyDetails}
      </div>
    );
  }
}

Company.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currentRoute: PropTypes.string,
  handleClosingCompany: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default Company;
