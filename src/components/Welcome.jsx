import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "./../img/portlandSign.jpg";

function Welcome(){

  var welcome={
    marginTop: "125px",
    marginLeft: "5%",
  }
  var imageStyle = {
    width: "100%"
  }

  return (
      <div style={welcome}>
        <Container>
          <Row>
            <Col md={5}>
              <img src={Image} style={imageStyle}></img>
            </Col>
            <Col md={7}>
              <h1>Welcome to Portland's Theatre Audition home!</h1>
              <h4>Here, you will be able to explore some of the amazing theatre companies Portland has to offer. It is not always easy to keep up on upcoming auditions. This site offers a centralized hub to know what shows are coming down the line and how to get in on the action.</h4>
              <h4>This site is a tool for actors and theater comanies alike. If you would like to have your company be involved, visit the contact site to reach out to the site administrator.</h4>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Welcome;
