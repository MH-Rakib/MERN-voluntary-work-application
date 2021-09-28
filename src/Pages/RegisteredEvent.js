import React, { useContext } from "react";
import { UserContext } from "../App";
import MyRegisteredEvents from "./../Components/MyRegisteredEvents/MyRegisteredEvents";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./RegisteredEvents.css";
import { Link } from "react-router-dom";

const RegisteredEvent = () => {
  const { field } = useContext(UserContext);
  const [volunteerField, setVolunteerField] = field;
  return (
    <div>
      <Container>
        <h2 className="registered-events-title">My Registered Events</h2>
        <Row>
          {volunteerField.map((obj) => (
            <Col lg={6}>
              <div className="registeredEvents">
                <MyRegisteredEvents value={obj}></MyRegisteredEvents>
              </div>
            </Col>
          ))}
        </Row>
        <Link to="/">
          <button className="registered-event-more">Explore More Events</button>
        </Link>
      </Container>
    </div>
  );
};

export default RegisteredEvent;
