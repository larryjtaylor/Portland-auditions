import React from "react";
import CompanyList from "./CompanyList";
import NewCompanyControl from "./NewCompanyControl";
import { connect } from "react-redux";
import { firebase, isLoaded, isEmpty, dataToJS } from "react-redux-firebase";

class Companies extends React.Component {

  constructor(props) {
  super(props);
  }

  render() {
    const { firebase, firebaseDatabaseObjectCompanies } = this.props;

    let companiesFromFirebase;
        if (!isLoaded(firebaseDatabaseObjectCompanies)) {
          companiesFromFirebase = "Loading";
        } else {
          if (isEmpty(firebaseDatabaseObjectCompanies)) {
            companiesFromFirebase = "";
          } else {
            let newCompanyArray = [];
            Object.keys(firebaseDatabaseObjectCompanies).map(key => {
              newCompanyArray.push(Object.assign(firebaseDatabaseObjectCompanies[key], {"id": key}));
            });
            companiesFromFirebase = <CompanyList 
                                    companyList = {newCompanyArray}/>
          }
        }

    var companyHeader = {
      marginTop: "115px",
      marginLeft: "5%"
    };

    return(
      <div>
        <h1 style={companyHeader}>The Companies:</h1>
        <hr/>
        {companiesFromFirebase}
          <NewCompanyControl />
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(["/companies"])(Companies);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObjectCompanies: dataToJS(firebase, "companies")
  })
)(firebaseWrappedComponent);
