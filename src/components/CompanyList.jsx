import React from "react";
import Company from "./Company";
import PropTypes from "prop-types";

function CompanyList(props) {


  return (
    <div>
      {props.companyList.map((company, index) =>
        <Company name={company.name}
                location={company.location}
                description={company.description}
                url={company.url}
                image={company.image}
                key={index}
                id={company.id}
                currentRoute={props.currentRoute}
                handleClosingCompany={props.handleClosingCompany}/>
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
