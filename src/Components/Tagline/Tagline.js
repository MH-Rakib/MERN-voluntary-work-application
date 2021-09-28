import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./tagline.css";

const Tagline = () => {
  return (
    <div className="tagline-container">
      <Container>
        <Row>
          <Col lg={7} className="mx-auto">
            <h2 className="tagline-heading">
              I grow by helping People in need
            </h2>
            <InputGroup className="my-3 px-5">
              <FormControl
                className="tagline-placeholder"
                placeholder="Search Something"
                aria-label="Search Something"
                aria-describedby="basic-addon2"
              />
              <Button className="tagline-placeholder" variant="primary">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tagline;
