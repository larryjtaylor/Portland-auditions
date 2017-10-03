import React from "react";
import Company from "./Company";
import PropTypes from "prop-types";

function CompanyList(props) {

  var companyHeader = {
    marginTop: "115px",
    marginLeft: "5%"
  }
  return (
    <div>
      <h1 style={companyHeader}>The Companies:</h1>
      <hr/>
      {props.companyList.map((company, index) =>
        <Company name={company.name}
                location={company.location}
                description={company.description}
                url={company.url}
                image={company.image}
                key={index}
                id={company.id}
                currentRoute={props.currentRoute}/>
      )}
    </div>
  );
}

CompanyList.propTypes = {
  companyList: PropTypes.array.isRequired,
  currentRoute: PropTypes.string,
  handleClosingCompany: PropTypes.func
};

export default CompanyList;
