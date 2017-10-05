import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import c from "./../constants/constants";
import { firebaseConnect } from "react-redux-firebase";
import { Button } from "react-bootstrap";

class NewAuditionForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewAuditionFormSubmission = this.handleNewAuditionFormSubmission.bind(this);
  }

  handleNewAuditionFormSubmission(event) {
    event.preventDefault();
    const { _date, _company, _showName, _director, _description, _showType, _url } = this.refs;
    const { firebase } = this.props;
    firebase.push("/auditions", {
      type: c.ADD_AUDITION,
      date: _date.value,
      company: _company.value,
      showName: _showName.value,
      director: _director.value,
      description: _description.value,
      showType: _showType.value,
      url: _url.value,
    });
    this.props.hideFormAfterSubmission();
  }

  render() {
    var spacing = {
      marginLeft: "10px",
      marginTop: "10px"
    };
    var center = {
      marginLeft: "9%",
      marginTop: "10px"
    };
    var textArea = {
      width: "80%",
      marginTop: "10px",
      marginLeft: "11%"
    };
    var buttonStyle = {
      display: "block",
      margin: "auto"
    };
    return(
      <div>
        <form onSubmit={this.handleNewAuditionFormSubmission}>
          <input
            ref="_date"
            type="text"
            id="date"
            placeholder="Audition mm/dd/yyyy"
            style={center}/>
          <input
            ref="_company"
            type="text"
            id="company"
            placeholder="Theater Company"
            style={spacing}/>
          <input
            ref="_showName"
            type="text"
            id="showName"
            placeholder="Name of production"
            style={spacing}/>
          <br/>
          <input
            ref="_director"
            type="text"
            id="director"
            placeholder="Director"
            style={center}/>
          <input
            ref="_showType"
            type="text"
            id="showType"
            placeholder="Musical or Play?"
            style={spacing}/>
          <input
            ref="_url"
            type="text"
            id="url"
            placeholder="Information website"
            style={spacing}/>
          <br/>
          <textarea
            ref="_description"
            id="description"
            placeholder="Describe the show"
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

NewAuditionForm.propTypes = {
  hideFormAfterSubmission: PropTypes.func
};

const firebaseWrappedNewAuditionForm = firebaseConnect(["/auditions"])(NewAuditionForm);


export default connect()(firebaseWrappedNewAuditionForm);
