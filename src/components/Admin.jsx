import React from "react";
import CompanyList from "./CompanyList";
import { connect } from "react-redux";
import c from "./../constants/constants";
import { firebase, isLoaded, isEmpty, dataToJS } from "react-redux-firebase";

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClosingCompany = this.handleClosingCompany.bind(this);
  }

  handleClosingCompany(companyId) {
    const { firebase } = this.props;
    firebase.remove(`/companies/${companyId}`);
  }

  render() {
    const { firebase, firebaseDatabaseObject } = this.props;

    let contentFromFirebase;
    if (!isLoaded(firebaseDatabaseObject)) {
      contentFromFirebase = "Loading";
    } else {
      if (isEmpty(firebaseDatabaseObject)) {
        contentFromFirebase = "";
      } else {
        let newCompanyArray = [];
        Object.keys(firebaseDatabaseObject).map(key => {
          newCompanyArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
        })
        contentFromFirebase = <CompanyList
          companyList = {newCompanyArray}
          currentRoute= {this.props.location.pathname}
          handleClosingCompany = {this.handleClosingCompany}/>
        }
      }
    return (
      <div>
      <h3>Welcome to the Admin page!</h3>
      {contentFromFirebase}
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(["/companies"])(Admin);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, "companies")
  })
)(firebaseWrappedComponent);
