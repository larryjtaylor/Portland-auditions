import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import c from "./../constants/constants";
import { firebaseConnect } from "react-redux-firebase";

class NewAuditionForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewAuditionFormSubmission = this.handleNewAuditionFormSubmission.bind(this);
  }

  handleNewAuditionFormSubmission(event) {
    event.preventDefault();
    const { _date, _showName, _director, _description, _url } = this.refs;
    const { firebase } = this.props;
    firebase.push("/auditions", {
      type: c.ADD_Audition,
      date: _date.value,
      showName: _showName.value,
      director: _director.value
      description: _description.value,
      url: _url.value,
    });
    this.props.hideFormAfterSubmission();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewAuditionFormSubmission}>
          <input
            ref="_date"
            type="text"
            id="date"
            placeholder="Audition date"/>
          <input
            ref="_showName"
            type="text"
            id="showName"
            placeholder="Name of production"/>
          <input
            ref="_director"
            type="text"
            id="director"
            placeholder="Director"/>
          <textarea
            ref="_description"
            id="description"
            placeholder="Describe the show"/>
          <input
            ref="_url"
            type="text"
            id="url"
            placeholder="Audition information website"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

NewAuditionForm.propTypes = {
  hideFormAfterSubmission: PropTypes.func
};

const firebaseWrappedNewAuditionForm = firebaseConnect(["/auditions"])(NewAuditionForm);


export default connect()(firebaseWrappedNewAuditionForm);
