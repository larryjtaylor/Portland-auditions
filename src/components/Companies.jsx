import React from "react";
import CompanyList from "./CompanyList";
import NewCompanyControl from "./NewCompanyControl";
import { connect } from "react-redux";

class Companies extends React.Component {

  constructor(props) {
  super(props);
  }

  render() {
    return(
      <div>
        <CompanyList
            companyList = {this.props.masterCompanyList}/>
          <NewCompanyControl />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    masterCompanyList : state
  };
};

export default connect(mapStateToProps)(Companies);
