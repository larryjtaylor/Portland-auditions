import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import c from "./../constants/constants";
import { firebaseConnect } from "react-redux-firebase";

class NewCompanyForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewCompanyFormSubmission = this.handleNewCompanyFormSubmission.bind(this);
  }

  handleNewCompanyFormSubmission(event) {
    event.preventDefault();
    const { _name, _location, _description, _url, _image } = this.refs;
    const { firebase } = this.props;
    firebase.push("/companies", {
      type: c.ADD_COMPANY,
      name: _name.value,
      location: _location.value,
      description: _description.value,
      url: _url.value,
      image: _image.value
    });
    this.props.hideFormAfterSubmission();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewCompanyFormSubmission}>
          <input
              ref="_name"
              type="text"
              id="name"
              placeholder="Company Name"/>
          <input
              ref="_location"
              type="text"
              id="location"
              placeholder="Location"/>
          <textarea
              ref="_description"
              id="description"
              placeholder="Describe your company"/>
          <input
              ref="_url"
              type="text"
              id="url"
              placeholder="Company website"/>
          <input
              ref="_image"
              type="text"
              id="image"
              placeholder="Use an image via URL"/>
            <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

NewCompanyForm.propTypes = {
  hideFormAfterSubmission: PropTypes.func
};

const firebaseWrappedNewCompanyForm = firebaseConnect(["/companies"])(NewCompanyForm);


export default connect()(firebaseWrappedNewCompanyForm);
