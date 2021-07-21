import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

class JobFeed extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Box> .col </Box>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <Box> .col-6 </Box>
            </Col>

            <Col md="6">
              <Box> .col-6 </Box>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <Box> .col-4 </Box>
            </Col>

            <Col md="4">
              <Box> .col-4 </Box>
            </Col>

            <Col md="4">
              <Box> .col-4 </Box>
            </Col>
          </Row>

          <Row>
            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <Box> .col-3 </Box>
            </Col>

            <Col md="auto">
              <Box> .col-auto with variable content</Box>
            </Col>

            <Col md="3">
              <Box> .col-3 </Box>
            </Col>
          </Row>

          
        </Container>
      </div>
    );
  }
}

export default JobFeed;
const Box = props => <div className="box">{props.children} </div>;