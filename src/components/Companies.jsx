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
            contentFromFirebase = "";
          } else {
            let newCompanyArray = [];
            Object.keys(firebaseDatabaseObject).map(key => {
              newCompanyArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
            });
            contentFromFirebase = <CompanyList companyList = {newCompanyArray} />
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
