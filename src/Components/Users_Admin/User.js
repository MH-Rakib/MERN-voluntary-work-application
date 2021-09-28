import React from "react";
import { Col } from "react-bootstrap";
import "./User.css";

const User = ({ obj }) => {
  const { name, email, field, date } = obj;
  console.log(obj);
  return (
    <>
      <Col lg={3}>
        <div>
          <p className="admin-userInfo">{name}</p>
        </div>
      </Col>
      <Col lg={3}>
        <div>
          <p className="admin-userInfo">{email}</p>
        </div>
      </Col>
      <Col lg={2}>
        <div>
          <p className="admin-userInfo">{field}</p>
        </div>
      </Col>
      <Col lg={2}>
        <div>
          <p className="admin-userInfo">{date}</p>
        </div>
      </Col>
      <Col lg={2}>
        <div>
          <button className="admin-userDelete">Delete</button>
        </div>
      </Col>
    </>
  );
};

export default User;
