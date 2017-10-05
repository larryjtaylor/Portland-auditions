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
    const { firebase, firebaseDatabaseObjectAuditions } = this.props;

    let auditionsFromFirebase;
        if (!isLoaded(firebaseDatabaseObjectAuditions)) {
          auditionsFromFirebase = "Loading";
        } else {
          if (isEmpty(firebaseDatabaseObjectAuditions)) {
            auditionsFromFirebase = "";
          } else {
            let newAuditionArray = [];
            Object.keys(firebaseDatabaseObjectAuditions).map(key => {
              newAuditionArray.push(Object.assign(firebaseDatabaseObjectAuditions[key], {"id": key}));
            });
            auditionsFromFirebase = <AuditionList auditionList = {newAuditionArray} />
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
        {auditionsFromFirebase}
          <NewAuditionControl />
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(["/auditions"])(Auditions);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObjectAuditions: dataToJS(firebase, "auditions")
  })
)(firebaseWrappedComponent);
