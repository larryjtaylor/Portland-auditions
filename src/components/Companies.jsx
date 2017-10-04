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
    const { firebase, firebaseDatabaseObject } = this.props;

    let contentFromFirebase;
        if (!isLoaded(firebaseDatabaseObject)) {
          contentFromFirebase = "Loading";
        } else {
          if (isEmpty(firebaseDatabaseObject)) {
            contentFromFirebase = "No companies added yet!";
          } else {
            let newCompanyArray = [];
            Object.keys(firebaseDatabaseObject).map(key => {
              newCompanyArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
            });
            contentFromFirebase = <CompanyList companyList = {newCompanyArray} />
          }
        }

    return(
      <div>
        {contentFromFirebase}
          <NewCompanyControl />
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(["/companies"])(Companies);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, "companies")
  })
)(firebaseWrappedComponent);
