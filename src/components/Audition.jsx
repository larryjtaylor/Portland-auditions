import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

function Audition(props) {

  var buttonStyle = {
    marginLeft: "3%",
    marginBottom: "5px",
    marginTop: "5px"
  };

  let auditionDetails =
    <div>
      <h2>{props.date}</h2>
      <h3>{props.showName}</h3>
      <h4>{props.director}</h4>
      <p><em>{props.description}</em></p>
      <p>{props.type}</p>
      <p><a href={props.url} target="blank">{props.url}</a></p>
    </div>;
  if (props.currentRoute === "/admin") {
    return(
      <div>
        {auditionDetails}
        <Button
          bsStyle="danger"
          bsSize="large"
          onClick={() => { props.handleClosingAudition(props.id); }}
          style={buttonStyle}>
          Remove Audition
        </Button>
        <hr/>
      </div>
    );
  } else {
    return(
      <div>
      {auditionDetails}
      <hr/>
      </div>
    );
  }
}

Audition.propTypes = {
  date: PropTypes.string.isRequired,
  showName: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  currentRoute: PropTypes.string,
  handleClosingAudition: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default Audition;
