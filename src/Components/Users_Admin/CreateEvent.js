import React, { useContext, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./CreateEvent.css";
import { UserContext } from "./../../App";
// import fakeData from "../../"

const CreateEvent = () => {
  const [addedEvent, setAddedEvent] = useState({});
  console.log(addedEvent);

  const { available } = useContext(UserContext);
  const [availableVolunteerField, setAvailableVolunteerField] = available;

  const handleCreatEvent = (e) => {
    const data = { ...addedEvent };
    data[e.target.name] = e.target.value;
    setAddedEvent(data);
  };

  const handleAddEvent = () => {
    setAvailableVolunteerField([addedEvent, ...availableVolunteerField]);

    fetch("http://localhost:4000/addEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedEvent),
    });
  };

  return (
    <Row>
      <Col lg={6}>
        <div className="createEvent">
          <h3>Event Title</h3>
          <input
            onChange={handleCreatEvent}
            type="text"
            name="title"
            placeholder="Enter Event Title"
          />
        </div>
      </Col>
      <Col lg={6}>
        <div className="createEvent">
          <h3>Event Id</h3>
          <input
            onChange={handleCreatEvent}
            type="text"
            name="id"
            placeholder="Set Event Id"
          />
        </div>
      </Col>
      <Col lg={6}>
        <div className="createEvent">
          <h3>Event Description</h3>
          <input
            onChange={handleCreatEvent}
            type="text"
            name="description"
            placeholder="Enter Event Description"
          />
        </div>
      </Col>
      <Col lg={6}>
        <div className="createEvent">
          <h3>Upload Image </h3>
          <input onChange={handleCreatEvent} type="file" name="image" />
        </div>
      </Col>
      <Col lg={6}>
        <div className="createEvent">
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      </Col>
    </Row>
  );
};

export default CreateEvent;
