import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import c from "./../constants/constants";
import { firebaseConnect } from "react-redux-firebase";
import { Button } from "react-bootstrap";

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

    var spacing = {
      marginLeft: "10px",
    };
    var center = {
      marginLeft: "14%"
    }
    var textArea = {
      width: "80%",
      marginTop: "10px",
      marginLeft: "11%"
    }
    var buttonStyle = {
      display: "block",
      margin: "auto"
    }
    return(
      <div>
        <form onSubmit={this.handleNewCompanyFormSubmission}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Company Name"
            style={center}/>
          <input
            ref="_location"
            type="text"
            id="location"
            placeholder="Location"
            style={spacing}/>
          <input
            ref="_url"
            type="text"
            id="url"
            placeholder="Company website"
            style={spacing}/>
          <input
            ref="_image"
            type="text"
            id="image"
            placeholder="Use an image via URL"
            style={spacing}/>
          <br/>
          <textarea
            ref="_description"
            id="description"
            placeholder="Describe your company in fewer than 200 words"
            style={textArea}/>
          <br/>
          <Button
            type="submit"
            bsStyle="success"
            style={buttonStyle}>
            Add
          </Button>
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
