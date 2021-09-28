import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import FakeData from "../../Assets/FakeData/FakeData";
import "./WorkDetails.css";
import { Link } from "react-router-dom";

const WorkDetails = () => {
  const { id } = useParams();
  const [voluntreeWork, setVoluntreeWork] = useState({});

  const { image, name, details } = voluntreeWork;

  useEffect(() => {
    const data = FakeData;
    const work = data.find((obj) => obj.id === id);
    setVoluntreeWork(work);
  }, [id]);
  console.log(id);
  return (
    <div>
      <Container>
        <Row>
          <Col lg={7} className="mx-auto">
            <Row>
              <Col lg={5}>
                <div>
                  <img src={image} className="voluntree-details-image" alt="" />
                </div>
              </Col>
              <Col lg={7}>
                <div className="voluntree-details">
                  <h3>{name}</h3>
                  <p>{details}</p>
                  <Link to={`/register/${id}`}>
                    <Button className="voluntree-details-register-button">
                      Click to register
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorkDetails;
