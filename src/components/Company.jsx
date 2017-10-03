import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

function Company(props) {

  var imageStyle = {
    width: "100%"
  }

  let companyDetails =
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <img src={props.image} style={imageStyle}/>
          </Col>
          <Col md={6}>
            <h3>{props.name} - {props.location}</h3>
            <p><em>{props.description}</em></p>
            <p><a href={props.url} target="blank">{props.url}</a></p>
          </Col>
        </Row>
      </Container>
      <hr/>
    </div>;
  if (props.currentRoute === "/admin") {
    return(
      <div>
        {companyDetails}
        <button onClick={() => { props.handleClosingCompany(props.id); }}>Remove Company</button>
      </div>
    );
  } else {
    return(
      <div>
      {companyDetails}
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
