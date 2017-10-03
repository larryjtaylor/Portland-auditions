import React from "react";
import CompanyList from "./CompanyList";
import { connect } from 'react-redux';
import c from './../constants';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClosingCompany = this.handleClosingCompany.bind(this);
  }

  handleClosingCompany(companyId) {
    const { dispatch } = this.props;
    const action = {
      type: c.CLOSE_COMPANY,
      companyId: companyId,
    }
    dispatch(action);
  }

  render() {
    return (
      <div>
      <h3>This is the Admin page!</h3>
      <CompanyList
        companyList={this.props.adminMasterCompanyList}
        currentRoute={this.props.location.pathname}
        handleClosingCompany={this.handleClosingCompany}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminMasterCompanyList : state
  }
}

export default connect(mapStateToProps)(Admin);
