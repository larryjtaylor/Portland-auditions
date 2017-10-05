import React from "react";
import CompanyList from "./CompanyList";
import AuditionList from "./AuditionList";
import { connect } from "react-redux";
import c from "./../constants/constants";
import { firebase, isLoaded, isEmpty, dataToJS } from "react-redux-firebase";

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClosingCompany = this.handleClosingCompany.bind(this);
    this.handleClosingAudition = this.handleClosingAudition.bind(this);
  }

  handleClosingCompany(companyId) {
    const { firebase } = this.props;
    firebase.remove(`/companies/${companyId}`);
  }

  handleClosingAudition(auditionId) {
    const { firebase } = this.props;
    firebase.remove(`/auditions/${auditionId}`);
  }

  render() {
    const { firebase, firebaseDatabaseObject } = this.props;

    let companiesFromFirebase;
    if (!isLoaded(firebaseDatabaseObject)) {
      companiesFromFirebase = "Loading";
    } else {
      if (isEmpty(firebaseDatabaseObject)) {
        companiesFromFirebase = "";
      } else {
        let newCompanyArray = [];
        Object.keys(firebaseDatabaseObject).map(key => {
          newCompanyArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
        })
        companiesFromFirebase =
        <CompanyList
          companyList = {newCompanyArray}
          currentRoute= {this.props.location.pathname}
          handleClosingCompany = {this.handleClosingCompany}/>
        }
      }
    let auditionsFromFirebase
    if (!isLoaded(firebaseDatabaseObject)) {
      auditionsFromFirebase = "Loading";
    } else {
      if (isEmpty(firebaseDatabaseObject)) {
        auditionsFromFirebase = "";
      } else {
        let newAuditionArray = [];
        Object.keys(firebaseDatabaseObject).map(key => {
          newAuditionArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
        })
        auditionsFromFirebase =
        <AuditionList
          auditionList = {newAuditionArray}
          currentRoute= {this.props.location.pathname}
          handleClosingAudition = {this.handleClosingAudition}/>
        }
      }

      var companyHeader = {
        marginTop: "115px",
        marginLeft: "5%"
      };
    return (
      <div>
        <h1 style={companyHeader}>The Companies:</h1>
        <hr/>
        {companiesFromFirebase}
        <hr/>
        <h1>Past Auditions</h1>
        <hr/>
        {auditionsFromFirebase}
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(["/companies"], ["/auditions"])(Admin);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, "companies")
  })
)(firebaseWrappedComponent);
