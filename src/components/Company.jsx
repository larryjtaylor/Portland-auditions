import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

function Company(props) {

  var imageStyle = {
    width: "100%"
  };
  var buttonStyle = {
    marginLeft: "3%",
    marginBottom: "5px",
    marginTop: "5px"
  };

  let companyDetails =
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <img src={props.image} style={imageStyle}/>
          </Col>
          <Col md={6}>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <p><em>{props.description}</em></p>
            <p><a href={props.url} target="blank">{props.url}</a></p>
          </Col>
        </Row>
      </Container>
    </div>;
  if (props.currentRoute === "/admin") {
    return(
      <div>
        {companyDetails}
        <Button
          bsStyle="danger"
          bsSize="large"
          onClick={() => { props.handleClosingCompany(props.id); }}
          style={buttonStyle}>
          Remove Company
        </Button>
        <hr/>
      </div>
    );
  } else {
    return(
      <div>
      {companyDetails}
      <hr/>
      </div>
    );
  }
}

Company.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currentRoute: PropTypes.string,
  handleClosingCompany: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default Company;
