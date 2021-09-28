import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { UserContext } from "../../App";
import "./MyRegisteredEvents.css";

const MyRegisteredEvents = ({ value }) => {
  const { image, name, date } = value;

  const { field } = useContext(UserContext);
  const [volunteerField, setVolunteerField] = field;

  const handleDeleteEvent = () => {
    const newData = volunteerField.filter((obj) => obj.name !== name);
    setVolunteerField(newData);
  };

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <img src={image} className="registered-event-image" alt="" />
        </Col>
        <Col lg={9}>
          <h3 className="registered-event-title">Event Name: {name}</h3>
          <p className="registered-event-date">Event Start: {date}</p>
          <button
            onClick={handleDeleteEvent}
            className="registered-event-delete"
          >
            Delete Event
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default MyRegisteredEvents;
