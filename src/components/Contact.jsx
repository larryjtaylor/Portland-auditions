import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "./../img/spelling.jpg";

function Contact(props) {

var contact = {
  marginTop: "115px",
  marginLeft: "5%"
};
var instructions = {

};
var imageStyle = {
  width: "100%"
};
  return (
    <div>
      <h1 style={contact}>Contact:</h1>
      <hr/>
      <Container>
        <Row>
          <Col md={5}>
            <h4>If you would like your company to be considered to join the Portland Audition Database, send an email to <a href="mailto:admin@portlandauditiondb.com">admin@portlandauditiondb.com</a> and include the following information:</h4>
            <p>Company Name:</p>
            <p>Address:</p>
            <p>Description of company (under 200 words):</p>
            <p>Company website url:</p>
            <p>One photo you would like to use, whether it is your theater space, artistic team, a recent production, etc.:</p>
          </Col>
          <Col md={7}>
            <img src={Image} style={imageStyle}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
