import React from "react";
import AuditionList from "./AuditionList";
import NewAuditionControl from "./NewAuditionControl";
import { connect } from "react-redux";
import { firebase, isLoaded, isEmpty, dataToJS } from "react-redux-firebase";

class Auditions extends React.Component {

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
            let newAuditionArray = [];
            Object.keys(firebaseDatabaseObject).map(key => {
              newAuditionArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
            });
            contentFromFirebase = <AuditionList auditionList = {newAuditionArray} />
          }
        }

    var auditionHeader = {
      marginTop: "115px",
      marginLeft: "5%"
    };

    return(
      <div>
        <h1 style={auditionHeader}>Upcoming Auditions:</h1>
        <hr/>
        {contentFromFirebase}
          <NewAuditionControl />
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(["/auditions"])(Auditions);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, "auditions")
  })
)(firebaseWrappedComponent);
