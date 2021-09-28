import React, { useContext, useEffect, useState } from "react";
import FakeData from "../../Assets/FakeData/FakeData";
import { Container, Row, Col } from "react-bootstrap";
import SingleWork from "./SingleWork";
import { Link } from "react-router-dom";
import { UserContext } from "./../../App";

const VoluntreeWork = () => {
  const [voluntreeWorks, setVoluntreeWorks] = useState([]);

  const { available } = useContext(UserContext);
  const [availableVolunteerField, setAvailableVolunteerField] = available;

  useEffect(() => {
    const data = FakeData;
    setVoluntreeWorks(data);
    setAvailableVolunteerField(data);
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {availableVolunteerField.map((work) => (
            <Col lg={3}>
              <SingleWork work={work}></SingleWork>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default VoluntreeWork;
